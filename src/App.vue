<template>
  <Page>
    <template #sticky-header>
      <TopAppBar top-left-icon="menu" centered>
        <template #title>
          <h1>Title large</h1>
        </template>

        <template #right-icons>
          <div style="margin-right: 16px;">
            <Icon name="account_circle" :weight="700" size="48px" />
          </div>
        </template>

        <template #headline-small>
          <h4>Headline small</h4>
        </template>

        <template #headline-medium>
          <h3>Headline medium</h3>
        </template>
      </TopAppBar>
    </template>
    
    <!-- <template #static-body> -->
      <PageBody>
        <div :class="$style.container">
          <div>
            <Card 
              ripple
              avatar="https://www.freepnglogos.com/uploads/circle-png/simple-blue-circle-png-3.png"
              body="https://scontent-cdg4-1.xx.fbcdn.net/v/t39.30808-6/319679372_846900319895998_3126758004465057867_n.jpg?stp=dst-jpg_p640x640&_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_ohc=Mz0KmUlHikcAX8o7qV-&_nc_ht=scontent-cdg4-1.xx&oh=00_AfAZHGikjE7tdLK6uuZboo3ijzqBt9CksHU7Aqq28DETXg&oe=644FC94C"
            >
              <template #header>
                Header
              </template>
              <template #sub-head>
                Subhead
              </template>

              <template #title>
                Title
              </template>
              <template #sub-title>
                Subhead
              </template>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Donec id neque sem. Integer velit nisi, eleifend non risus eget, 
                feugiat euismod diam. Maecenas blandit quam eget sagittis consectetur. 
                Nunc sit amet interdum lacus, a semper augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                Vestibulum.
              </p>

              <template #actions>
                <Button flat outlined> Enabled </Button>
                <Button flat color="primary"> Enabled </Button>
              </template>
            </Card>
          </div>

          <div>
            <Card 
              ripple
              avatar="https://www.freepnglogos.com/uploads/circle-png/simple-blue-circle-png-3.png"
              body="https://scontent-cdg4-1.xx.fbcdn.net/v/t39.30808-6/319679372_846900319895998_3126758004465057867_n.jpg?stp=dst-jpg_p640x640&_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_ohc=Mz0KmUlHikcAX8o7qV-&_nc_ht=scontent-cdg4-1.xx&oh=00_AfAZHGikjE7tdLK6uuZboo3ijzqBt9CksHU7Aqq28DETXg&oe=644FC94C"
              elevated
            >
              <template #header>
                Header
              </template>
              <template #sub-head>
                Subhead
              </template>

              <template #title>
                Title
              </template>
              <template #sub-title>
                Subhead
              </template>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Donec id neque sem. Integer velit nisi, eleifend non risus eget, 
                feugiat euismod diam. Maecenas blandit quam eget sagittis consectetur. 
                Nunc sit amet interdum lacus, a semper augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                Vestibulum.
              </p>
            </Card>
          </div>

          <div :class="$style.container2">
            <Card 
              avatar="https://www.freepnglogos.com/uploads/circle-png/simple-blue-circle-png-3.png"
              filled
            >
              <template #header>
                Header
              </template>
              <template #sub-head>
                Subhead
              </template>
            </Card>

            <Card 
              avatar="https://www.freepnglogos.com/uploads/circle-png/simple-blue-circle-png-3.png"
              body="https://scontent-cdg4-1.xx.fbcdn.net/v/t39.30808-6/319679372_846900319895998_3126758004465057867_n.jpg?stp=dst-jpg_p640x640&_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_ohc=Mz0KmUlHikcAX8o7qV-&_nc_ht=scontent-cdg4-1.xx&oh=00_AfAZHGikjE7tdLK6uuZboo3ijzqBt9CksHU7Aqq28DETXg&oe=644FC94C"
              outlined
            >
              <template #header>
                Header
              </template>
              <template #sub-head>
                Subhead
              </template>
            </Card>
          </div>
        </div>
        
        <template v-if="showButtons">
          <Button 
            color="primary"
            icon="chevron_right"
            :options="{ rotate: '45deg' }"
            float="bottom-right"
            @click="handleClickRightBottom"
            disabled
          />
          <Button 
            color="primary"
            icon="chevron_left"
            :options="{ rotate: '-45deg' }"
            float="bottom-left"
            @click="handleClickLeftBottom"
          />
          <Button 
            color="primary"
            icon="expand_more"
            float="bottom-center"
            @click="handleClickCenterBottom"
          />

          <Button 
            color="primary"
            icon="chevron_right"
            float="center-right"
            @click="handleClickRightCenter"
          />
          <Button 
            color="primary"
            icon="chevron_left"
            float="center-left"
            @click="handleClickLeftCenter"
          />
          <Button 
            color="primary"
            icon="add"
            float="center-center"
            @click="handleClickCenterCenter"
            disabled
          />

          <Button 
            color="primary"
            icon="chevron_right"
            :options="{ rotate: '-45deg' }"
            float="top-right"
            @click="handleClickRightTop"
          />
          <Button 
            color="primary"
            icon="chevron_left"
            :options="{ rotate: '45deg' }"
            float="top-left"
            @click="handleClickLeftTop"
            disabled
          />
          <Button 
            color="primary"
            icon="expand_less"
            float="top-center"
            @click="handleClickCenterTop"
          />
        </template>
      </PageBody>
    <!-- </template> -->

    <!-- <template #sticky-footer> -->
      <AppBar>
        <template #left>
          <Button icon="check_box"
                  flat circle appbar medium
                  :options="{color: 'black'}"
          />

          <Button icon="check_box"
                  flat circle appbar
                  color="primary"
          />

          <Button icon="check_box"
                  color="secondary"
                  medium appbar
          />
          <Button icon="check_box"
                  color="secondary"
                  small appbar
          />
        </template>

        <template #right>
          <Button icon="check_box"
                  color="ternary"
                  appbar
          />
        </template>
      </AppBar>
    <!-- </template> -->
  </Page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Button, Page, PageBody, AppBar, Icon } from './components';
import Card from './components/Card/Card.vue';
import TopAppBar from './components/AppBar/TopAppBar.vue';

const showButtons = ref(false);

const handleClick = (side: 'left' | 'right' | 'center', height: 'top' | 'bottom' | 'center') => () => console.log(`clicked ${side} ${height}`);

const handleClickLeftTop = handleClick('left', 'top');
const handleClickLeftCenter = handleClick('left', 'center');
const handleClickLeftBottom = handleClick('left', 'bottom');
const handleClickRightTop = handleClick('right', 'top');
const handleClickRightCenter = handleClick('right', 'center');
const handleClickRightBottom = handleClick('right', 'bottom');
const handleClickCenterTop = handleClick('center', 'top');
const handleClickCenterCenter = handleClick('center', 'center');
const handleClickCenterBottom = handleClick('center', 'bottom');
</script>

<style module>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  /* width: max-content; */
}

.container2 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>