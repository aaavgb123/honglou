---
layout: page
---

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>我们的团队</template>
    <template #lead>Go社区系列产品的研发和生态建设以自愿报名考核方式协作，这里会展示核心参与者的信息。。❤️❤️❤️  
    这里不代表所有为社区做出贡献的，我们向那些为社区做过贡献的人表示致敬🫡。这里只是我们的核心团队成员</template>
  </VPTeamPageTitle>
  <VPTeamMembers :members="members"></VPTeamMembers>
</VPTeamPage>

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme';

// 定义团队成员数组
const members = [
  {
    avatar: 'https://honglougo.cc/wp-content/uploads/2024/03/img_3803-1.jpg',
    name: '李衍(Yan-Li)',
    title: 'Go社区系列创始人，全球化发展小众社区创意者',
    links: [
      //{ icon: 'github', link: 'https://github.com/yyx990803' },
      //yutube推送
      { 
        icon:{
        svg:'<svg t="1710861005185" class="icon" viewBox="0 0 1441 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1621" width="200" height="200"><path d="M0 257.671837C0 120.602122 110.006857 8.944327 247.013878 6.896327L710.029061 0l476.118204 7.000816c136.003918 2.006204 245.634612 112.054857 247.076572 248.079674l5.328979 501.885388c1.462857 138.093714-108.982857 251.402449-247.055673 253.429551l-470.872816 6.917224-468.323266-6.979918C117.279347 1008.305633 8.08751 899.761633 5.287184 764.781714L0 508.656327V257.671837z" fill="#FF071B" p-id="1622"></path><path d="M996.122122 508.656327l-402.703673 211.968V296.730122l402.703673 211.947102z" fill="#FFFFFF" p-id="1623"></path></svg>'
      },
       link: 'https://youtu.be/5879XJENNFI?feature=shared' 
       },
       //抖音推送
       /*      { 
        icon:{
        svg:'<svg t="1710861213942" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2642" width="200" height="200"><path d="M199.111 0H824.89C934.684 0 1024 89.316 1024 199.111V824.89C1024 934.684 934.684 1024 824.889 1024H199.11C89.316 1024 0 934.684 0 824.889V199.11C0 89.316 89.316 0 199.111 0z" fill="#170B1A" p-id="2643"></path><path d="M511.431 302.08c0.569-64.284 0-128.569 0.569-192.853h131.413c-0.569 11.377 1.138 22.755 2.845 33.564h-96.711v522.24c0.569 22.187-5.12 44.373-15.93 63.716-17.066 29.582-48.924 50.062-83.057 52.906-21.618 1.707-43.804-2.275-63.147-13.084-14.79-7.965-27.306-19.342-36.977-32.996 33.564 18.774 77.368 17.067 109.795-3.982C491.52 712.25 512 675.84 512 638.293c-0.569-112.07-0.569-224.142-0.569-336.213z m216.747-36.978c18.204 11.378 38.684 20.48 59.733 25.031 12.516 2.845 25.031 3.983 38.116 3.983v29.582c-37.547-8.534-72.25-29.582-97.85-58.596z" fill="#25F4EE" p-id="2644"></path><path d="M274.773 428.942c47.218-29.582 104.676-41.529 159.29-33.564v31.289c-14.792 0.569-29.014 2.275-43.805 5.12-35.271 7.395-68.836 22.186-97.85 43.804-31.288 23.325-55.181 55.182-71.68 90.453-15.928 33.565-23.892 70.543-23.324 108.09 0 40.96 11.378 80.782 30.72 116.622 9.103 16.497 19.343 32.426 32.996 45.51-27.876-19.342-51.2-45.51-68.267-75.093-23.324-39.253-34.702-85.333-33.564-131.413 1.707-42.098 13.653-83.627 35.84-120.036 19.342-32.426 47.218-60.87 79.644-80.782z" fill="#25F4EE" p-id="2645"></path><path d="M549.547 142.791h97.28c3.413 18.773 10.24 36.409 18.773 53.476 13.653 26.169 32.996 49.493 58.027 64.853 1.706 1.138 2.844 2.276 3.982 3.982 25.6 29.014 60.302 50.062 98.418 58.596 0.569 34.133 0 68.835 0 102.969-64.285 0.569-128.57-19.911-180.907-57.458 0 81.92 0 163.84 0.569 245.76 0 10.809 0.569 21.618 0 32.995-2.845 39.823-15.36 79.076-35.271 113.778-17.067 30.151-40.391 56.89-68.267 77.37-35.84 26.737-80.213 41.528-124.587 42.666-22.755 0.569-45.51-0.57-67.697-5.69-31.29-6.826-60.871-19.91-87.04-38.115l-1.707-1.706c-13.084-13.085-23.893-29.014-32.996-45.511-19.342-35.272-30.72-75.663-30.72-116.623-0.568-36.977 7.396-74.524 23.325-108.089 16.498-35.27 40.96-67.128 71.68-90.453 29.013-21.618 62.578-36.409 97.849-43.804 14.222-2.845 29.013-4.551 43.804-5.12 0.57 13.084 0 26.169 0.57 38.684v66.56c-16.499-5.689-34.703-5.689-51.77-1.707-20.48 4.552-39.822 13.654-55.75 27.307-9.672 8.533-18.205 18.773-23.894 30.151-10.24 19.342-13.654 42.098-11.378 63.716 2.276 21.049 11.378 41.529 25.031 57.458 9.102 11.377 21.049 19.91 32.996 27.875 9.67 13.653 22.186 25.031 36.977 32.996 19.343 10.24 41.53 14.79 63.147 13.084 34.133-2.275 65.991-23.324 83.058-52.907 10.809-19.342 16.498-41.528 15.929-63.715 1.138-175.218 0.569-349.298 0.569-523.378z" fill="#FFFFFF" p-id="2646"></path><path d="M646.827 142.791c11.377 0.569 22.755 0 34.702 0 0 38.116 11.947 76.231 34.133 107.52 2.845 3.982 5.69 7.396 8.534 10.809-25.032-15.36-44.943-38.684-58.027-64.853-8.533-16.498-15.36-34.703-19.342-53.476z m179.2 180.907c12.515 2.844 25.03 3.982 38.115 3.982v132.551c-64.853 0.569-129.706-21.049-182.613-59.164v262.826c0.569 19.911-1.138 39.823-5.689 59.165-12.516 59.164-47.787 112.64-96.711 147.342-26.169 18.773-55.751 31.858-86.471 38.684-37.547 8.534-76.8 7.965-113.778-1.706-43.804-11.378-84.764-35.84-115.484-69.405 26.168 18.774 55.75 31.29 87.04 38.116 22.186 5.12 44.942 6.258 67.697 5.689 44.374-1.138 88.747-15.93 124.587-42.667 27.876-20.48 50.631-47.218 68.267-77.369 19.91-34.702 32.426-73.955 35.27-113.778 0.57-10.808 0.57-21.617 0-32.995-0.568-81.92-0.568-163.84-0.568-245.76 52.338 37.547 116.622 58.027 180.907 57.458-0.57-34.134 0-68.836-0.57-102.97z" fill="#FE2C55" p-id="2647"></path><path d="M434.631 426.098c12.516 0 25.6 0.569 38.116 2.275v135.965c-18.205-6.258-38.685-6.827-57.458-2.276-35.84 7.965-65.991 35.271-78.507 69.974-12.515 34.133-7.395 73.955 14.222 102.968-12.515-7.395-23.893-16.497-32.995-27.875-13.653-15.929-22.756-36.409-25.031-57.458-2.276-21.618 1.138-44.373 11.378-63.715 5.688-11.378 14.222-21.618 23.893-30.152 15.929-13.653 35.84-22.186 55.751-27.306 17.067-3.982 35.271-3.982 51.769 1.706v-66.56c-1.138-11.377-0.569-24.462-1.138-37.546z" fill="#FE2C55" p-id="2648"></path></svg>'
      },
       link: 'https://twitter.com/youyuxi' 
       },*/
       //b站推送
             { 
        icon:{
        svg:'<svg t="1710861244167" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3634" width="200" height="200"><path d="M0 0m184.32 0l655.36 0q184.32 0 184.32 184.32l0 655.36q0 184.32-184.32 184.32l-655.36 0q-184.32 0-184.32-184.32l0-655.36q0-184.32 184.32-184.32Z" fill="#EC5D85" p-id="3635"></path><path d="M512 241.96096h52.224l65.06496-96.31744c49.63328-50.31936 89.64096 0.43008 63.85664 45.71136l-34.31424 51.5072c257.64864 5.02784 257.64864 43.008 257.64864 325.03808 0 325.94944 0 336.46592-404.48 336.46592S107.52 893.8496 107.52 567.90016c0-277.69856 0-318.80192 253.14304-324.95616l-39.43424-58.368c-31.26272-54.90688 37.33504-90.40896 64.68608-42.37312l60.416 99.80928c18.18624-0.0512 41.18528-0.0512 65.66912-0.0512z" fill="#EF85A7" p-id="3636"></path><path d="M512 338.5856c332.8 0 332.8 0 332.8 240.64s0 248.39168-332.8 248.39168-332.8-7.75168-332.8-248.39168 0-240.64 332.8-240.64z" fill="#EC5D85" p-id="3637"></path><path d="M281.6 558.08a30.72 30.72 0 0 1-27.47392-16.97792 30.72 30.72 0 0 1 13.73184-41.216l122.88-61.44a30.72 30.72 0 0 1 41.216 13.74208 30.72 30.72 0 0 1-13.74208 41.216l-122.88 61.44a30.59712 30.59712 0 0 1-13.73184 3.23584zM752.64 558.08a30.60736 30.60736 0 0 1-12.8512-2.83648l-133.12-61.44a30.72 30.72 0 0 1-15.04256-40.7552 30.72 30.72 0 0 1 40.76544-15.02208l133.12 61.44A30.72 30.72 0 0 1 752.64 558.08zM454.656 666.88a15.36 15.36 0 0 1-12.288-6.1952 15.36 15.36 0 0 1 3.072-21.49376l68.5056-50.91328 50.35008 52.62336a15.36 15.36 0 0 1-22.20032 21.23776l-31.5904-33.024-46.71488 34.72384a15.28832 15.28832 0 0 1-9.13408 3.04128z" fill="#EF85A7" p-id="3638"></path><path d="M65.536 369.31584c15.03232 101.90848 32.84992 147.17952 44.544 355.328 14.63296 2.18112 177.70496 10.04544 204.05248-74.62912a16.14848 16.14848 0 0 0 1.64864-10.87488c-30.60736-80.3328-169.216-60.416-169.216-60.416s-10.36288-146.50368-11.49952-238.83776zM362.25024 383.03744l34.816 303.17568h34.64192L405.23776 381.1328zM309.52448 536.28928h45.48608l16.09728 158.6176-31.82592 1.85344zM446.86336 542.98624h45.80352V705.3312h-33.87392zM296.6016 457.97376h21.39136l5.2736 58.99264-18.91328 2.26304zM326.99392 457.97376h21.39136l2.53952 55.808-17.408 1.61792zM470.62016 459.88864h19.456v62.27968h-19.456zM440.23808 459.88864h22.20032v62.27968h-16.62976z" fill="#FFFFFF" p-id="3639"></path><path d="M243.56864 645.51936a275.456 275.456 0 0 1-28.4672 23.74656 242.688 242.688 0 0 1-29.53216 17.52064 2.70336 2.70336 0 0 1-4.4032-1.95584 258.60096 258.60096 0 0 1-5.12-29.57312c-1.41312-12.1856-1.95584-25.68192-2.16064-36.36224 0-0.3072 0-2.5088 3.01056-1.90464a245.92384 245.92384 0 0 1 34.22208 9.5744 257.024 257.024 0 0 1 32.3584 15.17568c0.52224 0.256 2.51904 1.4848 0.09216 3.77856z" fill="#EB5480" p-id="3640"></path><path d="M513.29024 369.31584c15.03232 101.90848 32.84992 147.17952 44.544 355.328 14.63296 2.18112 177.70496 10.04544 204.05248-74.62912a16.14848 16.14848 0 0 0 1.64864-10.87488c-30.60736-80.3328-169.216-60.416-169.216-60.416s-10.36288-146.50368-11.49952-238.83776zM810.00448 383.03744l34.816 303.17568h34.64192L852.992 381.1328zM757.27872 536.28928h45.48608l16.09728 158.6176-31.82592 1.85344zM894.6176 542.98624h45.80352V705.3312H906.5472zM744.35584 457.97376h21.39136l5.2736 58.99264-18.91328 2.26304zM774.74816 457.97376h21.39136l2.53952 55.808-17.408 1.61792zM918.3744 459.88864h19.456v62.27968h-19.456zM887.99232 459.88864h22.20032v62.27968h-16.62976z" fill="#FFFFFF" p-id="3641"></path><path d="M691.32288 645.51936a275.456 275.456 0 0 1-28.4672 23.74656 242.688 242.688 0 0 1-29.53216 17.52064 2.70336 2.70336 0 0 1-4.4032-1.95584 258.60096 258.60096 0 0 1-5.12-29.57312c-1.41312-12.1856-1.95584-25.68192-2.16064-36.36224 0-0.3072 0-2.5088 3.01056-1.90464a245.92384 245.92384 0 0 1 34.22208 9.5744 257.024 257.024 0 0 1 32.3584 15.17568c0.52224 0.256 2.51904 1.4848 0.09216 3.77856z" fill="#EB5480" p-id="3642"></path></svg>'
      },
       link: 'https://b23.tv/3IZs8tu' 
       },
       //推特推送
             { 
        icon:{
        svg:'<svg t="1710861349075" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8952" width="200" height="200"><path d="M463.58831408 644.0429037c-21.48124445 24.53959111-42.56199111 48.61800297-63.64273778 72.69641482-62.9266963 71.89541925-125.86552889 143.79083852-188.79222519 215.69839407-5.59483259 6.39582815-11.09257482 12.86447408-16.83304296 19.12680296-1.16508445 1.27431111-3.20398222 2.46366815-4.85451852 2.47580445-48.38741333 0.13349925-96.77482667 0.10922667-145.16224 0.08495408-0.55826963 0-1.11653925-0.15777185-2.43939555-0.3519526 117.37012148-134.15461925 234.35188148-267.84805925 351.43073184-401.67499851-123.62031408-161.66760297-247.01003852-323.04393482-371.10366814-485.33048889h5.75260444c99.9545363 0 199.92120889 0.0121363 299.87574519-0.07281778 3.53166222 0 5.75260445 1.00731259 7.92500148 3.87147852 69.46816 91.94458075 139.02127408 183.8163437 208.56225186 275.68810666 0.89808592 1.18935703 1.84471703 2.35444148 3.05834666 3.88361482 6.45650963-7.34245925 12.75524741-14.46646518 19.01757629-21.6390163 75.18435555-85.96138667 150.38084741-171.92277333 225.49238519-257.94484148 2.40298667-2.75493925 4.80597333-3.89575111 8.5075437-3.88361482 46.56696889 0.13349925 93.13393778 0.08495408 139.70090666 0.08495408h5.67978667L616.97896297 442.65320297c128.7661037 170.26010075 257.43511703 340.41097482 386.80803555 511.4842074h-6.22592c-96.92046222 0-193.85306075-0.02427259-290.77352297 0.09709038-4.18702222 0-6.79632592-1.11653925-9.39349333-4.52683853-76.55575703-100.2579437-153.22074075-200.41879703-229.87358814-300.59178667-1.20149333-1.55344592-2.40298667-3.09475555-3.93216-5.07297185z m362.15921777 219.97037038c-2.14812445-2.87630222-3.49525333-4.68461037-4.84238222-6.48078223-88.04882963-116.44776297-176.09765925-232.90766222-264.14648888-349.35542518-88.7891437-117.41866667-177.5904237-234.82519703-266.30674964-352.29240889-2.12385185-2.81562075-4.28411259-3.96856889-7.86432-3.9564326-26.54208 0.15777185-53.08416 0.08495408-79.62624 0.09709037-1.40781037 0-2.81562075 0.14563555-4.9030637 0.25486223 1.73549037 2.29376 2.98552889 3.96856889 4.25984 5.63124147 28.01057185 36.60306963 56.0211437 73.20613925 84.01957926 109.8092089C437.53168592 465.32380445 588.70139259 662.90270815 739.81041778 860.54229333c1.9539437 2.56075852 3.95643259 3.55593482 7.17255111 3.54379852 24.41822815-0.13349925 48.8364563-0.07281778 73.25468444-0.07281777h5.50987852z" p-id="8953"></path></svg>'
      },
       link: 'https://x.com/liyanquest?s=21&t=N98ISs9a4WUkd-whQwpaGw' 
       }, 
       //ins推送
        { icon: 'instagram', link: 'https://www.instagram.com/liyan.go?igsh=czY0b2I5MDRoZHJk&utm_source=qr'  
       },
    ]
  },
  {
    avatar: 'https://honglougo.cc/wp-content/uploads/2024/03/1312da9d668ddb4bbd2bb9192d7fa5c60d41f0ce3da63-ukUCob_fw658webp.webp',
    name: '狮狮',
    title: 'Go系列社区海外负责人',
    links: [
//      { icon: 'github', link: 'https://github.com/alicesmith' },
//      { icon: 'linkedin', link: 'https://linkedin.com/in/alicesmith' }
    ]
  },
  {
    avatar: 'https://honglougo.cc/wp-content/uploads/2024/03/9b84455e1654ff4b8e7330df9d9e3171ad9b1f943a227-dTYXpU_fw658webp.webp',
    name: '赵茜',
    title: '社区客服团队创办运营人',
    links: [
//      { icon: 'twitter', link: 'https://twitter.com/bobjohnson' },
//      { icon: 'dribbble', link: 'https://dribbble.com/bobjohnson' }
    ]
  },
  {
    avatar: 'https://honglougo.cc/wp-content/uploads/2024/03/WechatIMG36.jpg',
    name: 'Diana Ross',
    title: '海外技术及运营',
    links: [
//      { icon: 'github', link: 'https://github.com/charliebrown' },
//      { icon: 'email', link: 'mailto:charlie@example.com' }
    ]
  },
  {
    avatar: 'https://honglougo.cc/wp-content/uploads/2024/03/WechatIMG34.jpg',
    name: '蛋卷',
    title: '社区规划主要提议者之一',
    links: [
//      { icon: 'twitter', link: 'https://twitter.com/diana_ross' },
//      { icon: 'instagram', link: 'https://instagram.com/diana_ross' }
    ]
  },
  {
    avatar: 'https://honglougo.cc/wp-content/uploads/2024/03/WechatIMG37.jpg',
    name: 'Wang',
    title: '社区法律意识普及团队创始人，为社区用户提供很多帮助',
    links: [
//      { icon: 'github', link: 'https://github.com/elonmusk' },
//      { icon: 'twitter', link: 'https://twitter.com/elonmusk' }
    ]
  },
  {
    avatar: 'https://honglougo.cc/wp-content/uploads/2024/03/WechatIMG42.png',
    name: '茗仃',
    title: '社区发展主要贡献者',
    links: [
//      { icon: 'github', link: 'https://github.com/fionahill' },
//      { icon: 'linkedin', link: 'https://linkedin.com/in/fionahill' }
    ]
  },
  {
    avatar: 'https://honglougo.cc/wp-content/uploads/2024/03/WechatIMG41.jpg',
    name: '阿符',
    title: '社区相关文献及结合历史讲述，日常科普及分享主要创作者',
    links: [
//      { icon: 'bilibili', link: 'https://github.com/gandalfgrey' },
//      { icon: 'tiktok', link: 'https://medium.com/@gandalfgrey' }
    ]
  },
  // ...可以根据需要继续添加更多成员
];
</script>