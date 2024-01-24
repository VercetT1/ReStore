

import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import ProductList from "./ProductList";
import { useEffect } from "react";
import { fetchFilters, fetchProductsAsync, productSelectors, setPageNumber, setProductsParams } from "./catalogSlice";
import { Grid, Paper } from "@mui/material";
import ProductSearch from "./ProductSearch";
import RadioButtonGroup from "../../app/components/RadioButtonGroup";
import CheckBoxButton from "../../app/components/CheckBoxButtons";
import AppPagination from "../../app/components/AppPagination";
import LoadingComponent from "../../app/layout/LoadingComponent";

const sortOptions = [
    { value: 'name', label: 'Alphabetical' },
    { value: 'priceDesc', label: 'Price - High to Low' },
    { label: 'Price - Low to high', value: 'price' },

]

export default function Catalog()
{
    const products = useAppSelector(productSelectors.selectAll);
    const { productsLoaded, filtersLoaded, brands, types, productParams, metaData } = useAppSelector(state => state.catalog);
    const dispatch = useAppDispatch();

    useEffect(() =>
    {
        if (!productsLoaded) dispatch(fetchProductsAsync());
    }, [productsLoaded, dispatch])

    useEffect(() =>
    {
        if (!filtersLoaded) dispatch(fetchFilters());

    }, [filtersLoaded, dispatch])

    if (!filtersLoaded) return <LoadingComponent message="Loading products..." />

    return (
        <>
            <Grid container columnSpacing={4}>
                <Grid item xs={3}>
                    <Paper sx={{ mb: 2 }}>
                        <ProductSearch />
                    </Paper>
                    <Paper sx={{ mb: 2, p: 2 }}>
                        <RadioButtonGroup
                            selectedValue={productParams.orderBy}
                            options={sortOptions}
                            onChange={(e) => dispatch(setProductsParams({ orderBy: e.target.value }))}
                        />
                    </Paper>
                    <Paper sx={{ mb: 2, p: 2 }}>
                        <CheckBoxButton
                            items={brands}
                            checked={productParams.brands}
                            onChange={(items: string[]) =>
                                dispatch(setProductsParams({ brands: items }))
                            }
                        />
                    </Paper>
                    <Paper sx={{ mb: 2, p: 2 }}>
                        <CheckBoxButton
                            items={types}
                            checked={productParams.types}
                            onChange={(items: string[]) =>
                                dispatch(setProductsParams({ types: items }))
                            }
                        />
                    </Paper>
                </Grid>
                <Grid item xs={9}>
                    <ProductList products={products} />
                </Grid>
                <Grid item xs={3} />
                <Grid item xs={9} sx={{ mb: 2 }} />
                {metaData &&
                    <AppPagination
                        metaData={metaData}
                        onPageChange={(page: number) => dispatch(setPageNumber({ pageNumber: page }))}
                    />}

            </Grid>

        </>
    )
}