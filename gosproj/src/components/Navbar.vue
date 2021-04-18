<template> 
    <nav>
        <v-app-bar app color="transparent" elevate-on-scroll >
          <v-toolbar-title>
            <router-link to="/" tag="span" style="cursor: pointer">
              <v-img src="@/assets/logo.svg" max-height="100" max-width="200"></v-img>
            </router-link>
          </v-toolbar-title>
          <v-spacer></v-spacer>


          <span class="hidden-sm-and-up">
        <v-toolbar-side-icon @click="sidebar = !sidebar">
        </v-toolbar-side-icon>
      </span>
   
      <v-toolbar-items text class="hidden-xs-only">
        <v-btn
          text
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
          class="rounded black--text "
          >
          <v-icon class="black--text small" x-small dark >{{item.icon}}</v-icon>
          <h6>{{ item.title }}</h6>
        </v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on" color="black" class="black--text x-small">
            <v-icon left x-small>mdi-chevron-down</v-icon>
            <span><h6>Параметры выбора</h6></span>
          </v-btn>
        </template>
        <v-list>
					<v-list-item v-for="(link, index) in links" :key="index" router :to="link.route" height="20px">
						<v-list-item-title><h6>{{ link.text }}</h6></v-list-item-title>
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
          {text: '2010', route: '/'},
          { text: '2011', route: '/'},
           {text: '2012', route: '/'},
          { text: '2013', route: '/'},
          { text: '2014', route: '/'},
           {text: '2015', route: '/'},
          { text: '2016', route: '/'},
           {text: '2017', route: '/'},
          { text: '2018', route: '/'},
           {text: '2019', route: '/'},
          { text: '2020', route: '/'},
        ],
        menuItems: [
          { title: 'Главная', path: '/Main', icon: 'mdi-home' },
          { title: 'Карта', path: '/', icon: 'mdi-map' },
          { title: 'Регистрация/вход', path: '/Signin', icon: 'mdi-face' }
     ]
      }
    },
  }
</script>

<style >
v-btn {
  border-radius:12px;
  height: 10px;
  color:#006262;
  padding: 10px;
  }
  .v-toolbar__items{
    height: 20vh;
    padding: 0vh;

    
  }

</style>