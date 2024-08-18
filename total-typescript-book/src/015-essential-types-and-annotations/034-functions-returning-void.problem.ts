type Listener = () => void;

const addClickEventListener = (listener: Listener) => {
    document.addEventListener("click", listener);
};

addClickEventListener(() => {
    console.log("Clicked!");
});

addClickEventListener(
    // @ts-expect-error
    "abc",
);
