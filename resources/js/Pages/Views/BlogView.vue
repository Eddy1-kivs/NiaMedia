<template>
  <v-container
    class="rounded-md"
    :class="$vuetify.breakpoint.mdAndDown ? 'white' : 'mt-6'"
  >
    <Head>
      <title>{{ "Nia Media: " + blog.title }}</title>
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <meta name="”robots”" content="index, follow" />
      <link rel="shortcut icon" href="/images/logo.jpg" />

      <meta
        name="keywords"
        :content="`${metaTags},${blog.title}, nia media, latest news,news, logs, articles,news kenya, florentinah hijah, sports news`"
      />

      <meta
        name="description"
        :content="`${blog.content} nia media - latest hot news and articles ${metaTags}`"
      />
    </Head>
    <v-row class="rounded-lg">
      <v-col cols="12" md="9">
        <v-card
          :outlined="$vuetify.breakpoint.mdAndUp"
          :flat="$vuetify.breakpoint.mdAndDown"
        >
          <v-card-text :class="$vuetify.breakpoint.mdAndDown ? 'px-0' : ''">
            <div class="text-2xl font text-gray-900 pb-6">
              <div
                :class="$vuetify.breakpoint.mdAndUp ? 'text-4xl' : ''"
                v-text="blog.title"
              ></div>
              <div class="inline-flex flex-wrap space-x-3">
                <Link
                  v-for="(tag, index) in blog.tags"
                  :key="index"
                  :href="`/tag/${tag.slug}`"
                  class="no-underline"
                >
                  <span
                    class="text-sm leading-none text-orange-600"
                    v-text="`#${tag.slug}`"
                  ></span>
                </Link>
              </div>
              <div class="text-xs text-gray-500">
                {{ blog.created_at | moment("calendar") }}
              </div>
            </div>
            <v-img
              :src="coverImagePath"
              height="300"
              class="rounded-sm"
            ></v-img>
            <div class="remove pt-6" v-html="blog.content"></div>
            <v-row class="my-4">
              <v-col cols="12">
                <div class="title">Related Articles</div>
              </v-col>
              <v-col
                v-for="(blog, index) in related"
                :key="index"
                cols="12"
                sm="6"
                md="4"
              >
                <v-card>
                  <v-img
                    :src="blog.image.path"
                    :height="$vuetify.breakpoint.mdAndUp ? 200 : 200"
                  >
                    <div class="absolute bottom-2 left-2"></div>
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
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
                            :href="'/tag/' + tag.slug"
                          >
                            <v-btn
                              x-small
                              rounded
                              outlined
                              elevation=""
                              color="orange darken-2"
                              v-text="'#' + tag.name"
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
                    </div>
                    <div>{{ blog.created_at | moment("calendar") }}</div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
            <label for="">Add Comment</label>
            <v-textarea
              v-model="form.comment"
              dense
              :error-messages="errors.comment"
              outlined
              placeholder="Type here"
            ></v-textarea>
            <v-btn
              @click="addComment()"
              elevation=""
              color="blue"
              class="white--text"
              >Submit</v-btn
            >
            <div class="pt-3">
              <div class="title">All Comments</div>
              <div
                class="grid pt-4"
                v-for="(comment, key) in blog.comments"
                :key="key"
              >
                <div class="inline-flex space-x-4">
                  <v-avatar size="35">
                    <v-img :src="comment.user.image.path" alt="" />
                  </v-avatar>
                  <div class="grid">
                    <span v-text="comment.user.name"></span>
                    <div v-text="comment.content" class="text-sm"></div>
                    <div class="text-xs text-gray-500">
                      {{ comment.created_at | moment("calendar") }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </v-card-text>
          <v-card-text>
            <v-divider class="mb-3"></v-divider>

            <div class="text-lg font-semibold">Author</div>
            <div>{{ blog.user.name }}</div>
            <v-divider class="mt-3"></v-divider>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col md="3" v-if="$vuetify.breakpoint.mdAndUp">
        <v-card
          :outlined="$vuetify.breakpoint.mdAndUp"
          :flat="$vuetify.breakpoint.mdAndDown"
        >
          <v-card-title> Other Articles </v-card-title>
          <v-card-text :class="$vuetify.breakpoint.mdAndDown ? 'px-0' : ''">
            <div class="grid space-y-4">
              <div class="grid" v-for="(similar, index) in random" :key="index">
                <div class="inline-flex flex-wrap space-x-2">
                  <Link
                    class="no-underline text-orange-600"
                    v-for="(tag, index) in similar.tags"
                    :href="`/tag/${tag.slug}`"
                    :key="index"
                  >
                    <span
                      class="orange--text text-xs capitalize"
                      v-text="`#${tag.name}`"
                    ></span>
                  </Link>
                </div>
                <div>
                  <Link
                    v-text="similar.title"
                    :href="`/blog/${similar.slug}`"
                    class="no-underline text-gray-700"
                  >
                  </Link>
                </div>
                <div class="text-xs text-gray-500">
                  {{ similar.created_at | moment("calendar") }}
                </div>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { Inertia } from "@inertiajs/inertia";
import Navigation from "../Layouts/Navigation.vue";
export default {
  layout: Navigation,
  props: [
    "blog",
    "coverImagePath",
    "errors",
    "user",
    "random",
    "comments",
    "related",
    "shared",
  ],
  components: { Navigation },
  data() {
    return {
      form: {
        comment: null,
        blogId: this.blog ? this.blog.id : null,
      },
    };
  },
  computed: {
    metaTags() {
      this.shared.tags.forEach(function (tag) {
        return tag.name + "news, ";
      });
    },
  },
  methods: {
    addComment() {
      Inertia.post(`/comment/store`, this.form, {
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => {
          this.form.comment = null;
        },
      });
    },
  },
};
</script>

<style scoped>
.remove {
  all: revert;
}
</style>