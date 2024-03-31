import LayoutMain from "@/app/component/layout-main";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAddressCard} from "@fortawesome/free-solid-svg-icons";
export default function AboutUs() {
    return (
        <>
            <LayoutMain>
                <div className="mt-[2em]">
                    <h1 className="font-bold text-3xl text-green-800 flex flex-wrap items-center border-b-2 border-green-900 pb-3">
                        <FontAwesomeIcon icon={faAddressCard}
                                         className="text-green-900"
                                         style={{width: "30px", height: "30px", marginRight: "5px"}}
                        />
                        เกี่ยวกับเรา
                    </h1>
                </div>
            </LayoutMain>
        </>
    );
}