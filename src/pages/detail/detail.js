
import { useParams } from "react-router-dom";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import DetailContainer from "../../components/detail/DetailContainer";
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from "recoil";
import { detailAtom } from "../../recoil/atoms/detailAtom"
import { restaurantSelector } from "../../recoil/selectors/restaurantSeletor";
import { useEffect } from "react";

function Detail() {

    //전체 데이터
    const dataLoadable = useRecoilValueLoadable(restaurantSelector);

    let { id } = useParams();
    //클릭한 가게 데이터
    const [detailAt, setDetailAt] = useRecoilState(detailAtom);

    // useEffect(() => {

    //     try {
    //         let res = dataLoadable.contents.find(function (x) {
    //             return x.restaurant_seq == id;
    //         });
    //         console.log(res)

    //         if (res) {
    //             setDetailAt((prev) => ({
    //                 ...prev,
    //                 ...res,
    //             }));
    //         }
    //     } catch (error) {
    //         console.error("Error fetching data:", error);
    //     }


    // }, []);

    //dataLoadable -> loading, hasValue, hasError
    switch (dataLoadable.state) {
        //로딩중일경우
        case 'loading':
            return (
                <>
                    로딩중입니다
                </>
            );

        //값이 들어온경우
        case 'hasValue':

            // let res = dataLoadable.contents.find(function (x) {
            //     return x.restaurant_seq == id;
            // });

            // if (res) {
            //     setDetailAt((prev) => ({
            //         ...prev,
            //         ...res,
            //     }));
            // }

            return (

                <>
                    <div className="flex flex-col items-center justify-center">
                        <Header />
                        <DetailContainer />
                        <Footer />
                    </div>
                </>

            );

        //에러가 뜬 경우
        case 'hasError':
            return (
                <>
                    페이지를 찾을수 없습니다
                </>
            );
        default:
            return null;
    }
}



export default Detail;

