import { DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import Layout from "./Layout";

export default class Home implements View {

    private container: DomNode;

    constructor() {
        Layout.current.title = "Meet Connect Play with";
        Layout.current.content.append(this.container = el(".home-view",
            el("section",
                el(".exhibition-container",
                    el("img", { src: "/images/view/poster.png", alt: "nft exhibition poster" }),
                    el(".content",
                        el("h2", "NFT Exhibition"),
                        el("h3", "유니스버스와 메타버스\n한국과 프랑스를 잇는 NFT 전시 '연등회'"),
                        el("h4", "파리 한국 문화원 / KLUBS 복셀 2022.5.24 ~ 9.16\n파리 이함 NFT 아트 갤러리 2022.5.31 ~ 6.8"),
                        el("p", "한동안 NFT 아트(Non Fungible Token)는 전 세계적으로 그 가치를 보여주었다. NFT 작품은 많은 예술 작품과 마찬가지로 디지털로 인증된 가상 그래픽 창작물이며 인터넷 사용자들도 구입할 수 있다. 이 새로운 장르의 작품들은 최근 이미지, 비디오, 사진, 애니메이션, 게임 등 다양한 형태로 미술계에 진출하고 있다.\n\n이런 새로운 기술환경 속에서 한국문화원이  '연등회불교축제'와 NFT 전용 마켓플레이’KLUBS 온라인 갤러리를 연계해 메타버스로의 첫 진입을 기념한다.\n\n따라서 전시된 모든 작품들은 한국 연등회 축제의 등불을 테마로 할 것이다. 이들은 KLUBS 갤러리에서 호스팅하는 Cryptovoxel 가상 세계에서 볼 수 있습니다. 전용 스크린을 통해 센터 관람객들이 이 가상 전시를 체험할 수 있으며, 파리 IHAM 갤러리도 NFT 아티스트들의 놀라운 경험을 선보일 예정이다.\n\n프랑스와 한국의 가상세계와 현실세계 간의 문화교류의 토대를 마련하면서 대중이 이러한 새로운 기술에 익숙해질 수 있도록 하는 획기적인 예술 프로젝트이다. 실제로, 현재 NFT 미술계에서 활발하게 활동하고 있는 한국 작가 25명과 프랑스 작가 5명이 이번 가상 전시를 통해 조명될 것이다.\n\n참여 아티스트: Mr.미상, LAYLAY, 찰스장 , 혜경, 모준석, 화지, 그리다, NAKTA, W00WANG, Lindsayking, 성수 YIM, LOIE, Joy Jo, Suk, Bosul Kim, LIMJE, LIMJE, MILD-MES, Albertine Meunier, Jean-Yves Lemoine, Bitopsy, Maison Clone, BooyasanEduardo Guelfenbein "),
                    ),
                ),
                el(".artists-container",
                    el("h2", "Artists"),
                    el(".artists-list",
                        el(".image-container",
                            el("img", { src: "/images/view/artists-mock.png", alt: "Artist" }),
                            el("p", "Artist Name"),
                        ),
                    ),
                ),
                el(".display-container",
                    el("h2", "Display 1"),
                    el(".row",
                        el(".column",
                            el("img", { src: "/images/view/gallery-mock.png", alt: "gallery-mock" }),
                            el("img", { src: "/images/view/gallery-mock.png", alt: "gallery-mock" }),
                            el("img", { src: "/images/view/gallery-mock.png", alt: "gallery-mock" }),
                            el("img", { src: "/images/view/gallery-mock.png", alt: "gallery-mock" }),
                        ),
                        el(".column",
                            el("img", { src: "/images/view/gallery-mock.png", alt: "gallery-mock" }),
                            el("img", { src: "/images/view/gallery-mock.png", alt: "gallery-mock" }),
                            el("img", { src: "/images/view/gallery-mock.png", alt: "gallery-mock" }),
                            el("img", { src: "/images/view/gallery-mock.png", alt: "gallery-mock" }),
                        ),
                    ),
                ),
                el(".irl-container",
                    el("h2", "IRL"),
                    el(".row",
                        el(".column",
                            el("img", { src: "/images/view/gallery-mock.png", alt: "gallery-mock" }),
                            el("img", { src: "/images/view/gallery-mock.png", alt: "gallery-mock" }),
                            el("img", { src: "/images/view/gallery-mock.png", alt: "gallery-mock" }),
                            el("img", { src: "/images/view/gallery-mock.png", alt: "gallery-mock" }),
                        ),
                        el(".column",
                            el("img", { src: "/images/view/gallery-mock.png", alt: "gallery-mock" }),
                            el("img", { src: "/images/view/gallery-mock.png", alt: "gallery-mock" }),
                            el("img", { src: "/images/view/gallery-mock.png", alt: "gallery-mock" }),
                            el("img", { src: "/images/view/gallery-mock.png", alt: "gallery-mock" }),
                        ),
                    ),
                ),
            ),
        ));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}