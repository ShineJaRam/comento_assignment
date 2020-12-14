import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

axios.get('../../data/mockData.json')
    .then((res) => {
        console.log(res.data)
    })
    .catch((res) => {
        console.log(res.error)
    });

export const store = new Vuex.Store({
    state: {
        FeedCard: {
            categoty_name: '게시물',
            contents_id: '1',
            user_id: '1',
            create_at: '2020-12-14',
            title: 'titletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitle',
            contents: 'contentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontents'
        },
        AddCard: {
            img: 'https://img1.daumcdn.net/thumb/R1280x0.fpng/?fname=http://t1.daumcdn.net/brunch/service/user/ZJX/image/TUyQ8ZBJG0xiaY_KGtv13aV-kp8.png',
            title: 'titletitletitletitletitletitletitletitletitletitletitletitletitletitlevitletitletitletitletitletitletitletitletitletitletitletitletitletitlevtitletitletitletitletitletitletitletitletitletitletitletitletitletitlevtitletitletitletitletitletitletitletitletitletitletitletitletitletitlevtitletitletitletitletitletitletitletitletitletitletitletitletitletitlevtitletitletitletitletitletitletitletitletitletitletitletitletitletitlev',
            contents: 'contentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentsv'
        }
    }
});