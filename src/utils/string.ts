export const getNameFromProperty = (property: string) : string => {
    let output = property[0].toUpperCase();

    for(let i=1; i< property.length; ++i){
        if(property[i] === property[i].toUpperCase()){
            output += " ";
        }

        output += property[i];
    }

    return output;
}