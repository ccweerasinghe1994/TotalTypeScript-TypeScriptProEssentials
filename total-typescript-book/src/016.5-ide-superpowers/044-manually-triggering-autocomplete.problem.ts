type MyObj = {
    foo: string;
    bar: number;
    baz: boolean;
};

const acceptsObj = (obj: MyObj) => {
};

acceptsObj({
    bar: 123,
    baz: true,
    foo: "hello",
    // Autocomplete in here!
});

document.addEventListener(
    // Autocomplete this string!
    "",
    (event) => {
        console.log(event);
    },
);
