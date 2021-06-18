<template>
  <section class="mt-10 mb-10 min-h-screen">
    <div class="flex flex-col place-items-center justify-items-center pb-10">
      <h1 class="text-center text-xl lg:text-5xl font-bold my-10 tracking-widest">Meet our {{ members.teamName }} team</h1>
      <h3 class="text-center text-xl my-10 tracking-widest text-brand-green">{{members.subtitle}}</h3>
    </div>
    <div class="flex place-items-stretch justify-items-center mb-10"> 
      <div class="mx-auto">
        <p class="tracking-wide font-bold text-brand-green">
          Head of {{members.teamName}}
        </p>
        <membercard :img="members.head.img" :name="members.head.name" />
      </div>
    </div>
    <div class="mx-auto max-w-7xl mb-10 mt-10">
      <p class="tracking-wide font-bold text-brand-green text-center">
        Genaral Members
      </p>
    </div>
    <div class="mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center justify-items-center max-w-7xl">
      <div v-for="member in members.members" :key="member">
        <membercard :img="member.img" :name="member.name" />
      </div>
    </div>
  </section>
</template>

<script>
import membercard from "~/components/membercard.vue";
export default {
  components: {
    membercard,
  },
  data() {
    return {
      members: {
        teamName: "Content Writing",
        subtitle: "The brain behind every speech",
        logo: "/team/logos/logo_cw.svg",
        slug: "content-writer-team",
        head:{
          name:"Fatena Binte Latif",
          img:"https://i.imgur.com/UfEgLor.jpg"
        },
        members: [
          {
            name: "Sunjana Akter",
            desc: "Punctuality,passionate to work,loyal three things describes me.I'm proud of myself for these.I'm interested in reading book and want to learn more about anything.I'm Very much curious.I have both good and bad experience in my life.",
            img: "https://i.imgur.com/v9LRAdq.jpg",
          },
          {
            name: "Anika Aziz Arshe",
            desc: "",
            img: "https://i.imgur.com/6IJt9M3.jpg",
          },
          {
            name: "Sukanto Kumar Das",
            desc: "literature lover and a wtiter, peom recitor.",
            img: "https://i.imgur.com/lmc5zat.jpg",
          },
          {
            name: "Sumaiya Amrin",
            desc: "",
            img: "https://i.imgur.com/4CihMpo.jpg",
          },
          {
            name: "Rayhatul Jannat Zerin",
            desc: "I am an optimistic Over thinker  short temper person. ,I was working as Radio jockey at a Radio station named Radio kontho. ,The work had been from home through Face book live.,The listener's feedback was that my programme had been much inspirational for some of them. By watching this, they have done many work easily which was little bit tough for them., The credit had been gone to me, It had been a  great  achievement for me. ,Many work had been done by them by watching this programme which was little bit tough for them.",
            img: "https://i.imgur.com/De9fU6r.jpg",
          },
          {
            name: "Kassfia Hossain",
            desc: "",
            img: "https://i.imgur.com/hAYFhr3.jpg",
          },
          {
            name: "Jannatun Nayem Oishi",
            desc: "Debater is the word  I like to intoduce myself. I feel proud as the 2nd member of 4th Interfaculty debate champion team in novice sector. Logical conversation makes me interested in boring topics as well. Now I am learning about content writing. I wish to have a great journey with BAU Radio content writing team.",
            img: "https://i.imgur.com/zZfYoSk.jpg",
          },
          {
            name: "Sanjida Limu",
            desc: "Learning  something new and travelling are very passionate to me.Bedsides gathering knowledge, postive thinking in every aspect of life makes me more enthusiastic person.I like to feel music flowing on my face.",
            img: "https://i.imgur.com/5fBFC8g.jpg",
          },
          {
            name: "Maisha Mahfuj Rhidy",
            desc: "I'm passionate about solving problems and helping to improve processesI'm passionate about helping people in need, and finding them opportunities to exceed.Another One area that I’m passionate about is self-development and self-improvement in my personal life. I’m always looking to challenge myself and learn new things. That’s one reason I enjoy working in any situation. I’ve learned great communication skills, listening skills, and problem-solving skills that help me in my day-to-day work but also in my personal life in terms of confidence. I’m really passionate about reading books & being outdoors. That’s usually how I spend my weekends,I feel like I have more energy if I’ve spent some time outdoors on the weekend or read some books.",
            img: "https://i.imgur.com/WJcxvNs.jpg",
          }
        ],
      },
    };
  },
};
</script>

<style>
</style>