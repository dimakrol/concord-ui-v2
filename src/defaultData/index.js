export const segments =
    [
        {
            id: '',
            name: '',
            andFilters: [ //array of filters
                {
                    include: '', //true or false
                    type: '', //vid
                    advertiserId: '', //1,2,3
                    conversionType: '', //sale
                    dates: {
                        from: '',
                        to: '',
                    },
                    orFilters: [
                        // {
                        //     include: '', //true or false
                        //     type: '', //vid
                        //     advertiserId: '', //1,2,3
                        //     conversionType: '', //sale
                        //     dates: {
                        //         from: '',
                        //         to: '',
                        //     },
                        // }
                    ]
                }
            ],
            landingPagesData: {
                weight: '',
                pages:
                    [ //array of landing pages
                        {
                            landingPageId: '',
                            weight: '',
                        }
                    ],
                }
        }
    ];

export const defaultAnd = {
    include: true, //true or false
    type: 'vid', //vid
    advertiserId: null, //1,2,3
    conversionType: 'sale', //sale
    dates: {
        from: '',
        to: '',
    },
    orFilters: []
};

export const defaultOr = {
    include: true, //true or false
    type: 'vid', //vid
    advertiserId: null, //1,2,3
    conversionType: 'sale', //sale
    dates: {
        from: '',
        to: '',
    },
};

export const defaultSegment = {
        name: '',
        andFilters: [ //array of filters
            {
                include: true, //true or false
                type: 'vid', //vid
                advertiserId: null, //1,2,3
                conversionType: 'sale', //sale
                dates: {
                    from: '',
                    to: '',
                },
                orFilters: []
            }
            ],
    };

export const advertisers = [
    {
        name: 'Joker Y',
        id: 1,
    },
    {
        name: 'Denis S',
        id: 1,
    },
    {
        name: 'Jordan D',
        id: 1,
    },
    {
        name: 'Rain L',
        id: 1,
    },
];