const { createSlice } = require("@reduxjs/toolkit");

const    initialState={
    title:'eCommerce  Demo',
    description: 'eCommerce Demo by Ahmad <https://www.ahmadalmoustafa.com/>',
    keywords:'eCommerce, Online Shop, Demo, Reactjs, Redux ToolKit, Ahmad, Al Moustafa, Perth, Australia',
}
const seoSlice = createSlice({
    name:'seo',
    //default seo 
    initialState,
    reducers:{
        setSeo: (state,action)=>{
            // Use the spread operator to merge the existing state with the new payload
            // this will make it optional to pass some or all all the tags 
            let newSeo= {...state, ...action.payload};
            // if the title is passed 
            if ( action.payload.title !==  initialState.title)
                 newSeo.title = initialState.title + ' | ' +action.payload.title;          
            return newSeo;            
        }
    }
})

export const { setSeo } = seoSlice.actions;
export default seoSlice;



