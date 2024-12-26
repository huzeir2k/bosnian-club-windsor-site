<template>
  <div class="events">
    <h2>Upcoming Events</h2>
    <ul>
      <li v-for="event in events" :key="event.id">
        <h3>{{ event.title }}</h3>
        <p>{{ event.description }}</p>
        <p>Date: {{ event.date }}</p>
        <p>Location: {{ event.location }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Events',
  data() {
    return {
      events: [
        {
          id: 1,
          title: 'Bosnian Cultural Festival',
          description: 'Join us for a celebration of Bosnian culture with music, food, and dance!',
          date: 'Saturday, March 20, 2024',
          location: 'Windsor Community Center'
        },
        // Add more events as needed
      ]
    };
  }
};
</script>

<style scoped>
/* Add your custom styles here */
.events {
  padding: 20px;
}

.events h2 {
  margin-bottom: 10px;
}

.events ul {
  list-style-type: none;
  padding: 0;
}

.events li {
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
}

.events h3 {
  margin-top: 0;
}
</style>
