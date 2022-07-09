import React from 'react'

const Chat = () => {
  return (
   @layout('layouts/main')

   @section('title')
   Board Chat
   @endsection

   @section('content')
   <script>
      window.user={
         id: {{auth.user.id}},
         name:'{{auth.user.name}}',
         email:'{{auth.user.email}}',
         cellPhoneNumber:'{{auth.user.cellPhoneNumber}}',
         instagramRef:'{{auth.user.instagramRef}}',
         photoUrl:'{{auth.user.photoUrl}}',
         isAdmin:{{auth.user.isAdmin}},
         isMaster:{{auth.user.isMaster}}
      }
      window.messages=[]
      @each(message in messages)
      window.messages.push({
         sender:{
         id: {{message.sender.id}},
         name:'{{message.sender.name}}',
         email:'{{message.sender.email}}',
         cellPhoneNumber:'{{message.sender.cellPhoneNumber}}',
         instagramRef:'{{message.sender.instagramRef}}',
         photoUrl:'{{message.sender.photoUrl}}',
         isAdmin:{{message.sender.isAdmin}},
         isMaster:{{message.sender.isMaster}}
         },
         content: `{{message.content}}`,
         boardId: {{message.boardId}},
         created_at: `{{{format(new Date(message.createdAt), "hh:mm")}}}`,
         createdAt: new Date(`{{message.createdAt}}`)
      })
      @endeach
   </script>
   <div class="container mx-auto">
   <div class="flex-1 p:2 sm:p-6 justify-between flex flex-col" x-data="chat" x-init='[initChat({{board.id}},window.user,window.messages)]'>
      <div class="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
         <div class="flex items-center space-x-4">
            <img src="https://s2.glbimg.com/C3GPvh6ECD-33n8Df_v1EecSL9o=/0x0:1600x1000/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/m/H/k84eHgTA2l7JhjO3Q6Aw/wallpaper-2560-x-1600-wallpaper.jpg" alt="" class="w-10 sm:w-16 h-10 sm:h-16 rounded-full">
            <div class="flex flex-col leading-tight">
               <div class="text-2xl mt-1 flex items-center">
                  <span class="text-gray-700 mr-3">{{board.name}}</span>
                  <span class="text-green-500">
                     <svg width="10" height="10">
                        <circle cx="5" cy="5" r="5" fill="currentColor"></circle>
                     </svg>
                  </span>
               </div>
               <span class="text-lg text-gray-600">{{board.system.name}}</span>
            </div>
         </div>
         {{--  <div class="flex items-center space-x-2">
            <button type="button" class="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
               </svg>
            </button>
            <button type="button" class="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
               </svg>
            </button>
            <button type="button" class="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
               </svg>
            </button>
         </div>  --}}
      </div>
         <div id="messages" class="flex flex-col space-y-4 p-3 overflow-y-auto h-96 scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch" x-ref="message_field">
         <template x-for='(message,index) in messages'>
            <div class="chat-message">
               <div :class="{'flex items-end justify-end': user.id == message.sender.id, 'flex items-end': user.id != message.sender.id }">
                  <div :class="{'flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start': user.id != message.sender.id, 'flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-end': user.id == message.sender.id }">
                     <div>
                     <template x-if="messages[index+1]?messages[index+1].sender.id != message.sender.id?true:false:true">
                        <div :class="{'flex items-end': user.id == message.sender.id, 'flex items-end flex-row-reverse': user.id != message.sender.id }">
                           <span x-show="!messages[index+1] || message.created_at !== messages[index+1].created_at" class="font-thin text-x text-gray-400 mx-2" x-text="message.created_at"></span>
                           <span :class="{'px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ': user.id == message.sender.id, 'px-4 py-2 rounded-lg inline-block bg-gray-300 rounded-bl-none text-gray-600': user.id != message.sender.id }" x-text='message.content'></span>
                           <img x-bind:src="message.sender.photoUrl" alt="My profile" class="w-6 h-6 rounded-full order-1 mx-3 mt-2 align-bottom">
                        </div>
                     </template>
                     <template x-if="!messages[index+1] || messages[index+1]?messages[index+1].sender.id != message.sender.id?false:true:false">
                        <div class="mx-12">
                           <div :class="{'flex items-end': user.id == message.sender.id, 'flex items-end flex-row-reverse': user.id != message.sender.id }">
                           <span x-show="message.created_at !== messages[index+1].created_at"  class="font-thin text-x text-gray-400 mx-2" x-text="message.created_at"></span>
                           <span :class="{'px-4 py-2 rounded-lg inline-block bg-blue-600 text-white ': user.id == message.sender.id, 'px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600': user.id != message.sender.id }" x-text='message.content'></span>
                           </div>
                        </div>
                     </template>
                     </div>
                  </div>
               </div>
            </div>
         </template>
         </div>
         <div class="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
            <div class="relative flex">
               {{--  <span class="absolute inset-y-0 flex items-center">
                  <button type="button" class="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 text-gray-600">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                     </svg>
                  </button>
               </span>  --}}
               <textarea type="text" @keyup.enter="sendMessage(text)" x-model="text" rows="1" placeholder="Mensagem" class="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-10 pr-16 py-3 bg-gray-200 rounded-full">
               </textarea>
               <div class="absolute right-0 items-center inset-y-0 flex">
                  {{--  <button type="button" class="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 text-gray-600">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
                     </svg>
                  </button>
                  <button type="button" class="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 text-gray-600">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                     </svg>
                  </button>
                  <button type="button" class="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 text-gray-600">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                     </svg>
                  </button>  --}}
                  <button type="button" @click="sendMessage(text)" class="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-6 w-6 transform rotate-90">
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                     </svg>
                  </button>
               </div>
            </div>
   </div>
   </div>

   <style>
   .scrollbar-w-2::-webkit-scrollbar {
   width: 0.25rem;
   height: 0.25rem;
   }

   .scrollbar-track-blue-lighter::-webkit-scrollbar-track {
   --bg-opacity: 1;
   background-color: #f7fafc;
   background-color: rgba(247, 250, 252, var(--bg-opacity));
   }

   .scrollbar-thumb-blue::-webkit-scrollbar-thumb {
   --bg-opacity: 1;
   background-color: #edf2f7;
   background-color: rgba(237, 242, 247, var(--bg-opacity));
   }

   .scrollbar-thumb-rounded::-webkit-scrollbar-thumb {
   border-radius: 0.25rem;
   }
   </style>
   @endsection

   )
   }

export default Chat;

