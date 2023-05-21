export type CityType ={
    title:string
    houses:Array<TypeHouses>
    governmentBuildings:Array<governmentBuildingsType>
    cityZenumber:number
   }

   export type governmentBuildingsType ={

    type:'HOSPITAL'|'FIRE-STATION'
    budget:number
    staffCount:number
    address:TypeAddress
}

export type TypeHouses={
    buildedAt:number
    repaired:boolean
    address:TypeAddress
    
}
export type TypeAddress={
    number?:number
    street:StreetType
}

export type StreetType={
    title:string
    
}



