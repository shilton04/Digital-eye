<template>
  <div class="py-4">
    <!-- Main content -->
    <b-container class="my-5">
      <b-row>
        <!-- Blog posts -->
        <b-col lg="8">
          <h1 class="mb-4">Digital-eye Photography Blog</h1>
          <p class="lead">
            Discover the world of event photography in Bangalore through the
            lens of a budget-friendly photographer specializing in small events.
          </p>

          <article v-for="post in blogPosts" :key="post.id" class="mb-5">
            <b-img
              :src="post.image"
              fluid
              class="mb-3"
              :alt="post.title"
            ></b-img>
            <h2>{{ post.title }}</h2>
            <p class="text-muted">
              <small>
                Posted on {{ post.date }} | Categories:
                {{ post.categories.join(", ") }}
              </small>
            </p>
            <p>{{ post.excerpt }}</p>
            <b-button variant="dark" :href="post.link">Read More</b-button>
          </article>
        </b-col>

        <!-- Sidebar -->
        <b-col lg="4">
          <b-card class="mb-4">
            <h4>Categories</h4>
            <b-list-group>
              <b-list-group-item v-for="category in categories" :key="category">
                {{ category }}
              </b-list-group-item>
            </b-list-group>
          </b-card>

          <b-card>
            <h4>Popular Tags</h4>
            <div>
              <b-badge v-for="tag in tags" :key="tag" class="mr-2 mb-2">
                {{ tag }}
              </b-badge>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "PhotographyBlog",
  data() {
    return {
      blogPosts: [
        {
          id: 1,
          title: "Capturing Memorable Moments at Small Events in Bangalore",
          date: "May 15, 2023",
          categories: ["Small Events", "Bangalore"],
          image: "/placeholder.svg?height=300&width=500",
          excerpt:
            "Discover how a budget photographer can create lasting memories at intimate gatherings and small events in Bangalore.",
          link: "#",
        },
        {
          id: 2,
          title: "The Art of Budget Event Photography: Tips and Tricks",
          date: "May 10, 2023",
          categories: ["Budget Photography", "Tips"],
          image: "/placeholder.svg?height=300&width=500",
          excerpt:
            "Learn how to capture stunning event photos on a budget with these professional tips from a Bangalore-based photographer.",
          link: "#",
        },
        {
          id: 3,
          title: "Why Small Events Need Professional Photography Too",
          date: "May 5, 2023",
          categories: ["Small Events", "Professional Photography"],
          image: "/placeholder.svg?height=300&width=500",
          excerpt:
            "Explore the importance of hiring a professional photographer for small events and how it can elevate your memories.",
          link: "#",
        },
      ],
      categories: [
        "Event Photography",
        "Budget Photography",
        "Small Events",
        "Bangalore",
        "Wedding Photography",
        "Corporate Events",
      ],
      tags: [
        "EventPhotographer",
        "BangalorePhotography",
        "BudgetPhotographer",
        "SmallEvents",
        "WeddingPhotos",
        "CorporateEvents",
        "AffordablePhotography",
        "BangaloreEvents",
      ],
    };
  },
  metaInfo: {
    title: "Digital-eye Photography Blog | Event Photographer in Bangalore",
    meta: [
      {
        name: "description",
        content:
          "Discover insights and tips from Digital-eye, your budget-friendly event photographer in Bangalore specializing in small events and memorable moments.",
      },
      {
        name: "keywords",
        content:
          "event photographer, Bangalore, budget photographer, small events, wedding photography, corporate events, affordable photography",
      },
    ],
  },
};
</script>

<style scoped>
/* Add any additional custom styles here */
</style>
