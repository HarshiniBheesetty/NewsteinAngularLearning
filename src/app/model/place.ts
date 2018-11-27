export class Place {
    
    //properties
    public name: string;
    public description: string;
    public mainImg: string;
    public imgList: string[];

    //methods
    public constructor(){

        this.name = "Bengaluru"
        this.desctiptionMethod();
        this.mainImg = "https://www.holidify.com/images/compressed/3562.jpg"
        this.imgListMethod();

    }

    private imgListMethod(): void {

        this.imgList = [];

        for (let i = 0; i < 3; i++) {
            this.imgList[i] = "https://www.holidify.com/images/compressed/3562.jpg"
        }
    }

    private desctiptionMethod(): void {
        this.description = `Bangalore is the capital and largest city of the Indian state of Karnataka. With a population of over 15 million (as of January 2016), Bangalore is the third largest city in India and 27th largest city in the world. Bangalore is one of the most ethnically diverse cities in the country, with over 51% of the city's population being migrants[1] from other parts of India. Historically a multicultural city, Bangalore has experienced a dramatic social and cultural change with the advent of the liberalization and expansion of the information technology and business process outsourcing industries in India. IT companies in Bangalore employ over 35% of India's pool of 1 million IT professionals.`
    }
}
