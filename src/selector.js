import {createSelector} from "reselect";

let GetItems = (state) => {
    return state.data
};
let GETFilter = (state) => {
    return state.filter
};
let GETSorting = (state) => {
    return state.sorting
};
export let itemsSelector = createSelector(GETFilter, GetItems, GETSorting, (filters, items, sorting) => {
    let sorted = (items, sorting) => {
        items = [...items]
        if (sorting.name === "Название") {
            items.sort((a,b) => {
                return a.item>b.item?1:-1
            })
        } else if (sorting.name === "Цена") {
            items.sort((a, b) => {
                return a.price - b.price
            })
        } else if (sorting.name === "Количество") {
            items.sort((a, b) => {
                return a.count - b.count
            })
        }
        if (sorting.method === "Убывание") {
            return items.reverse()
        }
        return [...items]
    };
    if (filters !== "") {
        return sorted(items, sorting).filter((e) => {
            return e.item.toLowerCase().indexOf(filters.toLowerCase()) > -1
        });

    } else {
        return sorted(items, sorting)
    }
});