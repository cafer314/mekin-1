<template>
  <div class="testimonial-wrap">
    <h3 class="use-text-title text-center mb-4">
      ماذا يقول المشاركون عن برنامج جيل كالصحابة
    </h3>
    <div class="carousel">
      <splide :options="slickOptions">
        <splide-slide v-for="(item, index) in testiContent" :key="index">
          <div class="item">
            <testi-card
              :text="item.text"
              :avatar="item.avatar"
              :name="item.name"
            />
          </div>
        </splide-slide>
      </splide>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './testimonials-style';
</style>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import imgAPI from '@/assets/images/imgAPI';
import TestiCard from '../Cards/TestiCard';

export default {
  components: {
    Splide,
    SplideSlide,
    TestiCard,
  },
  data() {
    return {
      testiContent: [
        {
          text: 'لقد أثر برنامج جيل كالصحابة بشكل كبير على حياتي. تعلمت كيفية قراءة القرآن وتدبره بطريقة جديدة ومثمرة. أشعر بأنني أقرب إلى ديني وأكثر فهمًا له.',
          avatar: imgAPI.avatar[10],
          name: 'أحمد محمد',
        },
        {
          text: 'برنامج رائع! لقد ساعدني على تنمية مهاراتي الشخصية والدينية. المدربون ممتازون والمحتوى شامل ومفيد لجميع الأعمار.',
          avatar: imgAPI.avatar[1],
          name: 'فاطمة علي',
        },
        {
          text: 'كنت أبحث عن برنامج تعليمي يساعدني على فهم ديني بشكل أفضل، ووجدت كل ما أحتاجه في برنامج جيل كالصحابة. أنصح به بشدة لكل من يريد تقوية إيمانه وزيادة معرفته.',
          avatar: imgAPI.avatar[10],
          name: 'يوسف عبد الله',
        },
        {
          text: 'لقد ألهمني برنامج جيل كالصحابة للعودة إلى جذور ديني والالتزام بتعاليمه. أنشطة البرنامج متنوعة ومليئة بالفائدة، وأنا ممتنة لكل من ساهم في هذا العمل الرائع.',
          avatar: imgAPI.avatar[3],
          name: 'عائشة خالد',
        }
      ],
      slickOptions: {
        perPage: 3,
        perMove: 1,
        pagination: false,
        arrows: false,
        type: 'loop',
        breakpoints: {
          600: {
            perPage: 2,
          },
          800: {
            perPage: 3,
          },
        },
        reducedMotion: {
          speed: 500,
          rewindSpeed: 1000,
          autoplay: true,
        },
      },
    };
  },
};
</script>
