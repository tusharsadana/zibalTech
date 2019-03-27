export interface candidate {
    _id: String,
    registeredOn: String,
    personal: {
        _id: String,
        totalExperience: {
            months: number,
            _id: String,
            years: number
        },
        name: String,
        emailID: String,
        mobileNo: number,
        resume:String,
        currentLocation: String,
        registeredOn:String
    },
    employment: {
        currentDesignation:String,
        workingSince:String,
        currentCompany:String,
        annualSalary: String,
        noticePeriod:number,
        skills: [],
        anotherEmployment: [],
        _id: String
    },
    education: {
        anotherEducation: [],
        _id: String,
        highestQualification: String,
        course: String,
        university: String,
        specialization: String,
        courseType: String,
        passingYear : number
    },
    __v: number
}