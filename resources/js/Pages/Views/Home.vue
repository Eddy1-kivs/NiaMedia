<template>
  <v-container class="">
    <Head>
      <title>{{ "Nia Media - trending " }}</title>
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="shortcut icon" href="/images/logo.jpg" />
      <link rel="stylesheet" href="" />
      <meta name="”robots”" content="index, follow" />

      <meta
        name="keywords"
        :content="`hot, news, money, riches, trending,  tags,  nia media, latest news,news, logs, articles,news kenya, florentinah hijah, sports news`"
      />

      <meta
        name="description"
        :content="` nia media - latest hot news and articles`"
      />
    </Head>
    <v-row>
      <v-col
        v-for="(blog, index) in loadedBlogs.data"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-card>
          <v-img
            :src="blog.image.path"
            :height="$vuetify.breakpoint.mdAndUp ? 200 : 200"
          >
            <div class="absolute bottom-2 left-2"></div>
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          <v-card-text class="">
            <div class="grid space-y-2">
              <div class="inline-flex gap-x-3" v-if="blog.tags">
                <div class="inline-flex gap-x-2 flex-wrap">
                  <Link
                    v-for="(tag, index) in blog.tags"
                    :key="index"
                    :href="`/tag/${tag.slug}`"
                  >
                    <v-btn
                      x-small
                      rounded
                      outlined
                      elevation=""
                      color="green"
                      v-text="tag.name"
                    >
                    </v-btn>
                  </Link>
                </div>
              </div>

              <div class="text-sm text-red-300 d-none">
                <v-avatar size="40" left>
                  <img :src="'/images/cat4.jpg'" alt="" />
                </v-avatar>
                <span class="text-sm text-blue-300">Alice jones</span>
              </div>
              <Link :href="`/blog/${blog.slug}`" class="no-underline">
                <div
                  class="line-clamp-2 no-underline text-gray-900"
                  v-text="blog.title"
                ></div>
              </Link>
              <div class="text-xs">
                {{ blog.created_at | moment("calendar") }}
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { debounce } from "lodash";
import Navigation from "../Layouts/Navigation.vue";
export default {
  layout: Navigation,
  props: ["blogs"],
  components: { Navigation },
  data() {
    return {
      loadedBlogs: this.blogs,
    };
  },
  mounted() {
    window.addEventListener(
      "scroll",
      debounce((e) => {
        let pixelsFromBottom =
          document.documentElement.offsetHeight -
          document.documentElement.scrollTop -
          window.innerHeight;

        if (pixelsFromBottom < 500) {
          axios.get(this.loadedBlogs.next_page_url).then((response) => {
            this.loadedBlogs = {
              ...response.data,

              data: [...this.loadedBlogs.data, ...response.data.data],
            };
          });
        }
      }, 100)
    );
  },
};
</script>

<style>
</style>