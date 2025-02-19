import React, { useEffect, useState } from "react";

export const usePageTitle = (title: string) => {
    useEffect(() => {
        document.title = (title) +" - MyApp";
    }, []);
}