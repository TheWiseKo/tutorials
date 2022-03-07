<script>
import { getRandomUser } from "../api";
import Card from "./Card.vue";
export default {
  data() {
    return {
      users: [],
    };
  },
  async mounted() {
    const response = await getRandomUser();
    console.log(response.data);
    this.users = response.data;
  },
  components: { Card },
};
</script>
<template>
  <div class="card-list">
    <Card
      v-for="user of users"
      :imgUrl="user.avatar"
      :name="user.username"
      :birth="user.date_of_birth"
      :key="user.id"
    ></Card>
  </div>
</template>
<style>
.card-list {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  /* flex-direction: row; */
}
</style>
