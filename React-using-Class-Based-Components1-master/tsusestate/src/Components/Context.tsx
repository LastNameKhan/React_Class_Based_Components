import React, { Component } from "react";
import { rowData } from "./appData";

type Mystate = {
  id: any;
  name: any;
  number: any;
  email: any;
  password: any;
  confirmpassword: any;
  record: string[];
  user: string[];
  newArr: string[];
  Alldata: string[];
  updateEdit: string[];
  value: any;
  setState: React.Dispatch<React.SetStateAction<string>>;
  getRecord: (id: atypeny) => number | undefined;
  onEdit: (id: number | string) => void;
  onSave: (id: any) => void;
  onDelete: (id: any) => void;
  updateValue: (e: React.ChangeEvent<HTMLInputElement>, test: string) => void;
};

interface MyProps {
  children: any;
};

// type Mydata = {
//   id: number;
//   name: string;
//   number: string;
//   email: string;
//   password: string;
//   confirmpassword: string;
// };
const ProductContext = React.createContext as any;

class ProductProvider extends Component<MyProps, Mystate> {
  state:any = {
    Alldata: rowData,
    id: "",
    name: "",
    number: "",
    email: "",
    password: "",
    confirmpassword: "",
    updateEdit: [],
  };
  getRecord = (id: any) => {
    const product = this.state.Alldata.find((item:any) => item.id === id);
    return product?.id;
  };

  onEdit = (id: any) => {
    const tempProduct = this.state.Alldata;
    // console.log(tempProduct, "tempProduct");
    // console.log(this.getRecord(id), "record id");
    const newproduct: any = this.getRecord(id);
    const index = tempProduct.indexOf(newproduct);
    const selectedRecord = tempProduct[index];
    console.log("is as", id);
    this.setState({
      id: selectedRecord["id"],
      name: selectedRecord["name"],
      number: selectedRecord["number"],
      email: selectedRecord["email"],
      password: selectedRecord["password"],
      confirmpassword: selectedRecord["confirmpassword"],
    });
  };
  updateValue = (e: React.ChangeEvent<HTMLInputElement>, test: string) => {
    if (test === "name") {
      this.state.name = e.target.value;
    }
    if (test === "number") {
      this.state.number = e.target.value;
    }
    if (test === "email") {
      this.state.email = e.target.value;
    }
    if (test === "password") {
      this.state.password = e.target.value;
    }
    if (test === "confirmpassword") {
      this.state.confirmpassword = e.target.value;
    }
    const tempArr = [
      this.state.id,
      this.state.name,
      this.state.number,
      this.state.email,
      this.state.password,
      this.state.confirmpassword,
    ];
    this.setState({
      updateEdit: tempArr,
    });
  };

  onSave = (id: any) => {
    if (id !== "") {
      const SavedRecord = this.state.Alldata;
      console.log(SavedRecord);
      const newsave: any | number | undefined = this.getRecord(id);
      const index = SavedRecord.indexOf(newsave);
      const Record = SavedRecord[index];
      Record["name"] = this.state.updateEdit[1];
      Record["number"] = this.state.updateEdit[2];
      Record["email"] = this.state.updateEdit[3];
      Record["password"] = this.state.updateEdit[4];
      Record["confirmpassword"] = this.state.updateEdit[5];
      this.setState({
        Alldata: [...this.state.Alldata],
        id: "",
        name: "",
        number: "",
        email: "",
        password: "",
        confirmpassword: "",
      });
    } else {
      const MaxId = Math.max(...this.state.Alldata.map((item:any) => item.id));
      const id = MaxId + 1;
      const newArr: any = [];
      newArr["name"] = this.state.updateEdit[1];
      newArr["number"] = this.state.updateEdit[2];
      newArr["email"] = this.state.updateEdit[3];
      newArr["password"] = this.state.updateEdit[4];
      newArr["confirmpassword"] = this.state.updateEdit[5];
      this.setState({
        Alldata: [...this.state.Alldata, newArr],
        id: "",
        name: "",
        number: "",
        email: "",
        password: "",
        confirmpassword: "",
      });
    }
  };
  onDelete = (id: any) => {
    const tempuser = this.state.Alldata.filter((item:any) => item.id !== id);
    this.setState({
      Alldata: tempuser,
    });
  };

  render() {
    return (
      <div>
        <ProductContext.Provider
          value={{
            ...this.state,
            onEdit: this.onEdit,
            updateValue: this.updateValue,
            onSave: this.onSave,
            onDelete: this.onDelete,
          }}
        >
          {this.props.children}
        </ProductContext.Provider>
      </div>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
