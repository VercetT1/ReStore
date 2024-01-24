import { TextField, debounce } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { setProductsParams } from "./catalogSlice";
import { useState } from "react";

export default function ProductSearch()
{
    const { productParams } = useAppSelector(state => state.catalog);
    const dispatch = useAppDispatch();
    const [searchTerm, setSearchTerm] = useState(productParams.searchTerm);
    

    const debouncedSearch = debounce((event: any) =>
    {
        dispatch(setProductsParams({ searchTerm: event.target.value }));
    }, 1000)

    return (
        <TextField
            label='Search products'
            variant='outlined'
            fullWidth
            value={searchTerm || ''}
            onChange={(event: any) =>
            {
                setSearchTerm(event.target.value);
                debouncedSearch(event);
            }}
        />
    )
}