export const segments =
    [
        {
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
                        {
                            include: '', //true or false
                            type: '', //vid
                            advertiserId: '', //1,2,3
                            conversionType: '', //sale
                            dates: {
                                from: '',
                                to: '',
                            },
                        }
                    ]
                }
            ],
            landingPages: [ //array of landing pages
                {
                    landingPageId: '',
                    weight: '',
                }
            ]
        }
    ];