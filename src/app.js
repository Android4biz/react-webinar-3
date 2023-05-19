// @ts-nocheck
import React, { useCallback, useState } from "react";
import List from "./components/list";
// import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import Cart from "./components/cart";

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */

function App({ store }) {
	const cart = store.getState().cart
    const list = store.getState().list
    // console.log(item)
    // const [cartProduct, setCartProduct] = useState([])

    // const handleClick = (item) => {
    //     setCartProduct([...cartProduct, item])
    // }

    const callbacks = {
        onAddItem: useCallback(
            () => {
                store.addItem();
            },
            [store]
        ),
    };

    return <PageLayout>
            <Head title="Приложение на чистом JS" />
            <Cart cart={cart} />
            <List list={list} onAddItem={callbacks.onAddItem} />
        </PageLayout>
}

export default App