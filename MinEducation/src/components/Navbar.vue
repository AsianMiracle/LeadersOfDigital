<template> 
    <nav>
        <v-app-bar app color="transparent" elevate-on-scroll >
          <v-toolbar-title class="text-uppercase white--text">
            <router-link to="/" tag="span" style="cursor: pointer">
            <span class="px-5">Тут будет лого</span>
            </router-link>
          </v-toolbar-title>
          <v-spacer></v-spacer>


          <span class="hidden-sm-and-up">
        <v-toolbar-side-icon @click="sidebar = !sidebar">
        </v-toolbar-side-icon>
      </span>
   
      <v-toolbar-items text class="hidden-xs-only">
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
          color="white"
          class="rounded"
          style="padding: 15px; margin: 0px 5px"
          
          >
          <v-icon class="#04092A--text x-large" dark >{{item.icon}}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on" color="white">
            <v-icon left>mdi-chevron-down</v-icon>
            <span>Параметры выбора</span>
          </v-btn>
        </template>
        <v-list>
					<v-list-item v-for="(link, index) in links" :key="index" router :to="link.route">
						<v-list-item-title>{{ link.text }}</v-list-item-title>
					</v-list-item>
				</v-list>
      </v-menu>

        </v-app-bar>
    </nav>
</template>

<script>
  export default {
    data: () => {
      return {
        hidden: false,
        sidebar: false,
         links: [
          { icon: 'mdi-view-dashboard', text: 'Parameter1', route: '/'},
          { icon: 'mdi-folder', text: 'Parameter2', route: '/'},
          { icon: 'mdi-account', text: 'Parameter3', route: '/'}
        ],
        menuItems: [
          { title: 'Главная', path: '/Main', icon: 'mdi-home' },
          { title: 'Карта', path: '/', icon: 'mdi-map' },
          { title: 'Вход', path: '/Signin', icon: 'mdi-face' }
     ]
      }
    },
  }
</script>

<style >
v-btn {border-radius:12px;}
</style>