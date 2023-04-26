<template>
  <Page>
    <div style="position: relative; height: calc(100vh - 80px);">
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
    </div>

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
  </Page>
</template>

<script setup lang="ts">
import { Button, Page, AppBar } from './components';

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
