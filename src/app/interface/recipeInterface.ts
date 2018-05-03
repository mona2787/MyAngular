export class Recipe{    
    $key:string;
    title:string;
    description:string;
    image:string;
    ingredientArr:ingredient[];
}

export class ingredient{
    ingredientName: string;
    ingredientValue : string;
}