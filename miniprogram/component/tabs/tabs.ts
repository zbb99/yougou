Component({
    properties: {
        tabs: {
            value: [],
            type: Array
        }
    },
    data: {},
    methods: {
        handleItemTap(e) {
            const {index} = e.currentTarget.dataset;
            this.triggerEvent('tabChange', index);
        }
    }

});

export interface tabsDto {
    id: number,
    value: string,
    isActive: boolean
}
