class cakeForm{
    constructor(cakeBatterFlavor, fillingFlavor){
            this.cakeBatterFlavor = cakeBatterFlavor
            this.fillingFlavor = fillingFlavor
    }

    write(){
        console.log(`A delicius cake of ${this.cakeBatterFlavor} with filling of ${this.fillingFlavor}`)
    }

    toRoast(){
        console.log("Cake of " + this.cakeBatterFlavor + " toasting ")
    }

}

let partyCake = new cakeForm("chocolate dough", "nutella dough")
let premiumCake = new cakeForm("vanilla", "coconut")

partyCake.cakeBatterFlavor = "black forest" 

partyCake.write()
premiumCake.write()
premiumCake.toRoast()
