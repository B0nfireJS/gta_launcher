<template>
  <div class="server">
    <ServerHeader
      time="13 часов"
      date="10 июня"
      achives="4/28"
    />

    <Server
      serverName="Impossible RolePlay | 127.0.0.1:7777"
      serverDesc="Играй в GTA SAMP с самым большим русскоязычным комьюнити в GTA Online. 
      Начни играть в GTA San Andreas по сети на Arizona RolePlay с телефона или ПК всего в 
      пару кликов прямо сейчас!"
    />

    <PlayPanel 
      percent="92%"
      downloadProgress="2.1Gb"
      fileWeight="2.3Gb"
    />

  </div>
</template>

<script>
import ServerHeader from '@/components/ServerHeader'
import Server from '@/components/Servers/Server'
import PlayPanel from '@/components/Servers/PlayPanel'

export default {
  // name: "Project1",
  components: {
    ServerHeader,
    Server,
    PlayPanel,
  }
};
</script>