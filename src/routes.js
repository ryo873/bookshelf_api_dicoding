// eslint-disable-next-line no-unused-expressions
const { getHelloWorld, addNotesHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByIdHandler, deleteNoteByIdHandler } = require("./handler");

const routes = [
  {
    method: "GET",
    path: "/hello",
    handler: getHelloWorld,
  },
  {
    method: "POST",
    path: "/books",
    handler: addNotesHandler,
  },
  {
    method: "GET",
    path: "/books",
    handler: getAllNotesHandler,
  },
  {
    method: "GET",
    path: "/books/{bookId}",
    handler: getNoteByIdHandler,
  },
  {
    method: "PUT",
    path: "/books/{bookId}",
    handler: editNoteByIdHandler,
  },
  {
    method: "DELETE",
    path: "/books/{bookId}",
    handler: deleteNoteByIdHandler,
  },
];

module.exports = routes;
