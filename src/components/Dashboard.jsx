/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import dashboardpic from "../images/todo.webp";
import codingpic from "../images/code.webp";
import { databases, account } from "../AppwriteConfig";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard | Perfector";
  }, []);
  const [topics, setTopics] = useState([]);
  const [newTopic, setNewTopic] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editedTopics, setEditedTopics] = useState({});
  const [presentUser, setPresentUser] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchPresentUser();
    fetchTopics();
  }, []);

  const fetchPresentUser = async () => {
    try {
      const response = await account.get();
      setPresentUser(response.$id);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchTopics = async () => {
    try {
      setLoading(true);
      const response = await databases.listDocuments(
        "64a655223c7d1fc593e5",
        "64a6a131555f02ccdadd"
      );
      const filteredTopics = response.documents.filter(
        (topic) => topic.userid === presentUser
      );
      setTopics(filteredTopics);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPresentUser();
  }, []);

  useEffect(() => {
    if (presentUser) {
      fetchTopics();
    }
  }, [presentUser]);

  const addTopic = async (e) => {
    e.preventDefault();

    if (newTopic.trim() === "") {
      alert("Please Enter A Topic");
      return;
    }

    try {
      const docId = Date.now().toString();
      const documentData = {
        userid: presentUser,
        topicname: newTopic,
      };

      const promise = databases.createDocument(
        "64a655223c7d1fc593e5",
        "64a6a131555f02ccdadd",
        docId,
        documentData
      );

      promise.then(
        function (response) {
          fetchTopics(); // Refresh the topics list
          setNewTopic(""); // Clear the input field
        },
        function (error) {
          console.log(error);
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTopic = async (topicId) => {
    try {
      const promise = databases.deleteDocument(
        "64a655223c7d1fc593e5",
        "64a6a131555f02ccdadd",
        topicId
      );

      promise.then(
        function (response) {
          fetchTopics(); // Refresh the topics list
        },
        function (error) {
          console.log(error);
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  const startEditMode = (topicId) => {
    setEditMode(true);
    setEditedTopics((prevEditedTopics) => ({
      ...prevEditedTopics,
      [topicId]: {
        topicname: topics.find((topic) => topic.$id === topicId).topicname,
      },
    }));
  };

  const cancelEditMode = () => {
    setEditMode(false);
    setEditedTopics({});
  };

  const saveEditedTopic = async (e, topicId) => {
    e.preventDefault();

    const editedTopic = editedTopics[topicId];

    if (editedTopic.topicname.trim() === "") {
      alert("Please enter a topic name");
      return;
    }

    try {
      const promise = databases.updateDocument(
        "64a655223c7d1fc593e5",
        "64a6a131555f02ccdadd",
        topicId,
        {
          topicname: editedTopic.topicname,
        }
      );

      promise.then(
        function (response) {
          fetchTopics(); // Refresh the topics list
          cancelEditMode();
        },
        function (error) {
          console.log(error);
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section>
      <Sidebar />
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="outer">
              <div className="middle">
                <div className="inner">
                  <h1>Welcome To Perfector&apos;s Dashboard!</h1>
                  <p>Some Instructions:</p>
                  <p>Start Creating Your Favourite Topics Here.</p>
                  <form onSubmit={addTopic}>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter A Topic"
                        value={newTopic}
                        onChange={(e) => setNewTopic(e.target.value)}
                      />
                    </div>
                    <button type="submit" className="btn btn-success">
                      Add Topic
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="outer">
              <div className="middle">
                <div className="inner">
                  <img src={dashboardpic} alt="dashboard" id="animateimg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <h1 className="text-center mb-3">Your Topics</h1>
          {loading ? (
            <p>Loading Your Topics...</p>
          ) : (
            topics.map((topic) => (
              <div className="col-sm-4" key={topic.$id}>
                <div className="card">
                  <img src={codingpic} className="card-img-top" alt="coding" />
                  <div className="card-body">
                    {!editMode || !editedTopics[topic.$id] ? (
                      <>
                        <h5 className="card-title">{topic.topicname}</h5>
                        <p className="card-text">
                          Start Creating Your {topic.topicname} Practice Todos Now!
                        </p>
                      </>
                    ) : (
                      <>
                        <input
                          type="text"
                          className="form-control mb-3"
                          value={editedTopics[topic.$id].topicname}
                          onChange={(e) =>
                            setEditedTopics((prevEditedTopics) => ({
                              ...prevEditedTopics,
                              [topic.$id]: {
                                ...prevEditedTopics[topic.$id],
                                topicname: e.target.value,
                              },
                            }))
                          }
                        />
                      </>
                    )}
                    <Link
                      to={`/Dashboard/Todos/${topic.$id}`}
                      className="btn btn-success"
                    >
                      Todos
                    </Link>
                    {!editMode || !editedTopics[topic.$id] ? (
                      <>
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteTopic(topic.$id)}
                        >
                          Delete
                        </button>
                        <button
                          className="btn btn-warning"
                          onClick={() => startEditMode(topic.$id)}
                        >
                          Edit
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className="btn btn-secondary"
                          onClick={cancelEditMode}
                        >
                          Cancel
                        </button>
                        <button
                          className="btn btn-warning"
                          onClick={(e) => saveEditedTopic(e, topic.$id)}
                        >
                          Save
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
