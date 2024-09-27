import BoxDescription from "./BoxDescription";
import {ChatLine} from "solar-icon-set";
export interface RegisterCommentType {
}

const RegisterComment: React.FC<RegisterCommentType> = ({
}) => {
    return (
        <div>
            <BoxDescription clsasName="" name="ثبت نظر" Icon={ChatLine}>
                dsf
            </BoxDescription>
        </div>
    );
}

export default RegisterComment;