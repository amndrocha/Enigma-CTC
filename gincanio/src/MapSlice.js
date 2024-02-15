import { createSlice } from "@reduxjs/toolkit"

export const mapSlice = createSlice({
        name: 'map',
        initialState: {
            modalClass: "none",
            found: false,
            dark: false,
            pass: "",
            input: "",
            countries: [
                {
                    name: 'brasil',
                    pass: 'brasil',
                    position: [ -2.7562580015438476 , -48.17132509212502 ],
                    marker: "locked-point",
                },
                {
                    name: 'argentina',
                    pass: 'argentina',
                    position: [ -40.77563875754914 , -69.2750762182338 ],
                    marker: "unlocked-point",
                },
                {
                    name: 'eua',
                    pass: 'eua',
                    position: [ 33.71432359567805 , -86.95083968378019 ],
                    marker: "locked-point",
                },
                {
                    name: 'polonia',
                    pass: 'polonia',
                    position: [ 51.57581250779703 , 20.601412987576932 ],
                    marker: "locked-point",
                },
                {
                    name: 'turquia',
                    pass: 'turquia',
                    position: [ 39.87468079676904 , 35.40007298068552 ],
                    marker: "locked-point",
                },
                {
                    name: 'mocambique',
                    pass: 'mocambique',
                    position: [ -9.915867897227745 , 27.67686458128958 ],
                    marker: "unlocked-point",
                },
                {
                    name: 'arabia',
                    pass: 'arabia',
                    position: [ 25.73921961430858 , 42.000545531346155 ],
                    marker: "locked-point",
                },
                {
                    name: 'india',
                    pass: 'india',
                    position: [ 21.16301794100615 , 79.60419371933031 ],
                    marker: "locked-point",
                },
                {
                    name: 'indonesia',
                    pass: 'indonesia',
                    position: [ -0.396793751120472 , 101.92963933255506 ],
                    marker: "unlocked-point",
                },
                {
                    name: 'turcomenistao',
                    pass: 'turcomenistao',
                    position: [ 39.4008965162013 , 58.422772177048984 ],
                    marker: "locked-point",
                },
            ]
        },
        reducers: {
            handleModal: (state, action) => {
                if (state.modalClass == "modal") {
                    state.modalClass = "none";
                    state.found = false;
                    state.pass = "";
                } else {
                    state.modalClass = "modal";
                    state.pass = action.payload;
                }
            },
            setInput: (state, action) => {
                state.input = action.payload;
            },
            checkPass: (state, action) => {
                let pass = state.pass;
                let input = state.input;
                if (pass == input) {
                    state.countries.map((country) => {
                        if (country.pass == pass) {
                            country.marker = state.dark ? "dark-unlocked-point" : "unlocked-point";
                        }
                    })
                }
                state.input = "";
            },
            handleFound (state) {
                state.found = true;
            },
            handleDark (state) {
                state.dark = !state.dark;
                console.log(state.dark);
                state.countries.map((country) => {
                    if (country.marker == "locked-point") {
                        country.marker = "dark-locked-point";
                        return;
                    }
                    if (country.marker == "unlocked-point") {
                        country.marker = "dark-unlocked-point";
                        return;
                    }
                    if (country.marker == "dark-unlocked-point") {
                        country.marker = "unlocked-point";
                        return;
                    }
                    if (country.marker == "dark-locked-point") {
                        country.marker = "locked-point";
                        return;
                    }
                })
            }
        }

    }
);

export const { handleModal, setInput, checkPass, handleFound, handleDark } =  mapSlice.actions;
export default mapSlice.reducer
