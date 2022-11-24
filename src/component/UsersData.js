import React, { useEffect } from "react";
import { getAllUsers } from "../redux/action/productAction";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const UsersData = () => {
  const dispatch = useDispatch();
  const fetchData = async () => {
    const response = await axios.get("https://fakestoreapi.com/users");
    //  console.log(response.data);
    dispatch(getAllUsers(response.data));
  };
  useEffect(() => {
    fetchData();
  });
  const users = useSelector((state) => state.allUsers.users);
  const renderList = users.map((getDetail) => {
    //const { email, phone } = getDetail;

    return (
      <div>
        <section class="featured-products-wrapper">
          <div class="container">
            <div class="row">
              <div class="col-md-3">
                <div class="feature-product-box">
                  <div class="feature-text">
                    <span>{getDetail.email}</span>
                    <p>
                      <b>{getDetail.phone}</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default UsersData;
