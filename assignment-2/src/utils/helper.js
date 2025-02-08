export const truncateText = (text, maxlength = 100) =>{
    return  text.length > maxlength ? text.substring(0, maxlength) + "..." : text;
}