export const segments =
    [
        {
            id: '',
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