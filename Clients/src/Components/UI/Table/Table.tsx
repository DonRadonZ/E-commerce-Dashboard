import { createContext, ReactNode, useContext } from "react";
import styled from "styled-components";
import { PAGE_SIZE } from "../../../utils/constant";


const StyledTable = styled.div`
    border: 1px solid var(--color-gray-200);

    font-size: 1.4rem;
    background-color: var(--color-gray-0);
    border-radius: 7px;
    overflow: hidden;
`;

interface CommonRowProps {
    columns: string;
  }


const CommonRow = styled.div<CommonRowProps>`
    display: grid;
    grid-template-columns: ${(props) => props.columns};
    column-gap: 2.4rem;
    align-items: center;
    transition: none;
`;

const StyledHeader = styled(CommonRow)`
    padding: 1.6rem 2.4rem;

    background-color: var(--color-gray-50);
    border-bottom: 1px solid var(--color-gray-100);
    text-transform: uppercase;
    letter-spacing: 0.4px;
    font-weight: 600;
    color: var(--color-gray-600);
`;

const StyledRow = styled(CommonRow)`
    padding: 1.2rem 2.4rem;

    &:not(:last-child){
        border-bottom: 1px-solid var(--color-gray-100);
    }
`;

const StyledBody = styled.section`
    margin: 0.4rem 0;
`;

const Footer = styled.footer`
  background-color: var(--color-gray-50);
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  &:not(:has(*)) {
    display: none;
  }
`;

const Empty = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`

type TableContextProps = {
    columns: string;

}

const TableContext = createContext<TableContextProps>({columns:""});

interface ITable {
    columns: string;
    children: ReactNode;
}

export default function Table({columns, children}: ITable){
    return(
        <TableContext.Provider value={{columns}}>
            <StyledTable role="table">
                {children}
            </StyledTable>
        </TableContext.Provider>
    )
}

interface ChildrenProps {
    children: ReactNode;
}

function Header({children}:ChildrenProps){
    const {columns} = useContext(TableContext)

    return(
        <StyledHeader role="row" columns={columns} as="header">
            {children}
        </StyledHeader>
    )
}

function Row({children}:ChildrenProps){
    const {columns} = useContext(TableContext)

    return(
        <StyledRow role="row" columns={columns} as="header">
            {children}
        </StyledRow>
    )
}

type TableBodyProps = {
    data: any;
    render: (tableData: any) => any;
};

function Body({data, render}: TableBodyProps){
    

    if (!data.length) return <Empty>No data to show at the moment</Empty>;

    return <StyledBody>{data.slice(0,PAGE_SIZE).map(render)}</StyledBody>

}

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Footer = Footer;

