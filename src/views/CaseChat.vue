<template lang="html">
  <div class="back_blue uk-animation-toggle" tabindex="0">
    <div id="nav">
      <Header/>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-9">
          <div class="bg-dark uk-light p-2 rounded-top container">
            <h2>Выполните кейс</h2>
          </div>
          <div class="uk-light container text-white bg-white rounded">

            <div class="msg_history">

              <div
                v-for="message in messages"
                :class="[message.author===authUser.displayName?'outgoing_msg':'incoming_msg']">

                <div :class="[message.author===authUser.displayName?'sent_msg':'received_msg']">
                  <div class="received_withd_msg mt-2">
                    <span class="time_date" > {{message.author}}:</span>
                    <p>{{message.message}}</p>
                    </div>
                </div>
              </div>

            </div>
            <div class="type_msg">
              <div class="input_msg_write">
                <input
                @keyup.enter="saveMessage"
                v-model="message"
                type="text" class="write_msg" placeholder="Type a message" />
                <button class="msg_send_btn" @click="saveMessage" type="button"><i class="fa fa-paper-plane-o" aria-hidden="true" uk-icon="icon: arrow-right; ratio: 3.5"></i></button>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <button class="btn btn-light p-4" style="font-size:30px;border-radius:25px" type="button" name="button">Посмотреть кейс</button>
          <button  class="btn btn_color p-4 mt-5 disabled" id="check_btn" style="font-size:30px;border-radius:25px;width:100%" type="button" name="button">Выполнено</button>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"

import firebase from "firebase"
export default {
  data(){
    return{
      message:null,
      messages:[],
      authUser:{},
      author:'',
      room:1
    }
  },
  methods:{
    scrollToBottom(){
      let box = document.querySelector('.msg_history');
      box.scrollTop=box.scrollHeight;
    },
    toReward(){
        document.getElementById('check_btn').classList.remove('disabled')
        db.collection('chat').doc('rooms').delete().then(()=>{
          console.log('deleted')
        })
      this.$router.push('/')
    },
    saveAuth(){
      db.collection('users').onSnapshot((querySanpshot)=>{
        querySanpshot.forEach(doc => {
            if(doc.data().email == this.authUser.email){
              this.author = doc.data().name
              this.authUser.displayName = doc.data().name
            }
        });

      })
    },
    saveMessage(){
        //save to firestore
        if(this.message!=null){
          db.collection('chat').doc('rooms').collection('room1').doc('message'+this.room).set({

              message:this.message,
              author:this.author,
              createdAt:new Date()

          }).then(()=>{
            this.scrollToBottom();
            this.room+=1

          })
          this.message=null
        }
    },
    checkCaseSystem(){
      let re=""
      let keyword;
      db.collection('cases').onSnapshot((querySanpshot)=>{
        querySanpshot.forEach(doc => {
          keyword = doc.data().keyword

          for(let i=0;i<this.messages.length;i++){
            console.log(new RegExp(keyword,'i').test(this.messages[i].message))
            if(this.messages[i].message==doc.data().keyword){
              //this.toReward()
              document.getElementById('check_btn').classList.remove('disabled')
              console.log('s')
            }else{

            }
          }
        });

      })
    },
    fetchMessages(){
      db.collection('chat').doc('rooms').collection('room1').orderBy('createdAt').onSnapshot((querySanpshot)=>{
        let allMessages=[];
        querySanpshot.forEach(doc=>{
            allMessages.push(doc.data())
        })
        this.messages=allMessages

        setTimeout(()=>{
          this.scrollToBottom();
          this.checkCaseSystem()
        },100)
      })
    },
  },
  created(){
    firebase.auth().onAuthStateChanged(user=>{
      if(user){
        this.authUser=user;

      }else{
        this.authUser={}
      }
    })
    this.saveAuth()
    this.fetchMessages()
  },
  components:{
    Header,Footer
  }
}
</script>

<style lang="css" scoped>
.btn_color{
  background-color:#A4EDBF
}

.container{max-width:1170px; margin:auto;}
img{ max-width:100%;}
.inbox_people {
  background: #f8f8f8 none repeat scroll 0 0;
  float: left;
  overflow: hidden;
  width: 40%; border-right:1px solid #c4c4c4;
}
.inbox_msg {
  border: 1px solid #c4c4c4;
  clear: both;
  overflow: hidden;
}
.top_spac{ margin: 20px 0 0;}


.recent_heading {float: left; width:40%;}
.srch_bar {
  display: inline-block;
  text-align: right;
  width: 60%; padding:
}
.headind_srch{ padding:10px 29px 10px 20px; overflow:hidden; border-bottom:1px solid #c4c4c4;}

.recent_heading h4 {
  color: #05728f;
  font-size: 21px;
  margin: auto;
}
.srch_bar input{ border:1px solid #cdcdcd; border-width:0 0 1px 0; width:80%; padding:2px 0 4px 6px; background:none;}
.srch_bar .input-group-addon button {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  border: medium none;
  padding: 0;
  color: #707070;
  font-size: 18px;
}
.srch_bar .input-group-addon { margin: 0 0 0 -27px;}

.chat_ib h5{ font-size:15px; color:#464646; margin:0 0 8px 0;}
.chat_ib h5 span{ font-size:13px; float:right;}
.chat_ib p{ font-size:14px; color:#989898; margin:auto}
.chat_img {
  float: left;
  width: 11%;
}
.chat_ib {
  float: left;
  padding: 0 0 0 15px;
  width: 88%;
}

.chat_people{ overflow:hidden; clear:both;}
.chat_list {
  border-bottom: 1px solid #c4c4c4;
  margin: 0;
  padding: 18px 16px 10px;
}
.inbox_chat { height: 550px; overflow-y: scroll;}

.active_chat{ background:#ebebeb;}

.incoming_msg_img {
  display: inline-block;
  width: 6%;
}
.received_msg {
  display: inline-block;
  padding: 0 0 0 10px;
  vertical-align: top;
  width: 92%;
 }

 .received_withd_msg p {
  background: #ebebeb none repeat scroll 0 0;
  border-radius: 3px;
  color: #646464;
  font-size: 14px;
  margin: 0;
  padding: 5px 10px 5px 12px;
  width: 100%;
}
.time_date {
  color: #747474;
  display: block;
  font-size: 12px;
  margin: 8px 0 0;
}
.received_withd_msg { width: 57%;}
.mesgs {
  float: left;
  padding: 30px 15px 0 25px;
  width: 60%;
}

 .sent_msg p {
  background: #05728f none repeat scroll 0 0;
  border-radius: 3px;
  font-size: 14px;
  margin: 0; color:#fff;
  padding: 5px 10px 5px 12px;
  width:100%;
}
.outgoing_msg{ overflow:hidden; margin:26px 0 26px;}
.sent_msg {
  float: right;
  width: 46%;


}
.input_msg_write input {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  border: medium none;
  color: #4c4c4c;
  font-size: 15px;
  min-height: 48px;
  width: 100%;
}

.type_msg {border-top: 1px solid #c4c4c4;position: relative;}
.msg_send_btn {
  background: #05728f none repeat scroll 0 0;
  border: medium none;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  font-size: 17px;
  height: 33px;
  position: absolute;
  right: 1%;
  top: 20%;
  width: 33px;
}
.messaging { padding: 0 0 50px 0;}
.msg_history {
  height: 516px;
  overflow-y: auto;
}
</style>
