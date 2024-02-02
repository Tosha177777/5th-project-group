import styled from "styled-components";

export const Calendar = styled.div`
   display: flex;
   juistify-content: center;
   margin-bottom: 8px;

   button,
   select {
    margin: 0 4px; 
   }

   day.selected {
    border: 2px solid dodgerblue;
   }

   day.today {
    background-color: dodgerblue;
    color: white;
   }

   day.today:hover {
    background-color: #0081ff;
   }

   day.today,selected {
    border: 2px solid lightgray;
   }

`;


 export const Tab = styled.table`
   table-layout: fixed;
   border-collapse: separate;
   border-spacing: 0;
   margin: auto;
 `;

 export const Th = styled.thead`
   verticasl-align: middle;
   text-align: center;
   height: 36px;

 `;

 export const Day = styled.td`
   padding: 4px 8px;
   vertical-align: middle;
   text-align: center;
   border: 2px solid transparent;

   &:hover {
    background-color: #eaeaea;
    cursor: pointer;
   }

   d
 `;