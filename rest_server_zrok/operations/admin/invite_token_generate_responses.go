// Code generated by go-swagger; DO NOT EDIT.

package admin

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"
)

// InviteTokenGenerateCreatedCode is the HTTP code returned for type InviteTokenGenerateCreated
const InviteTokenGenerateCreatedCode int = 201

/*
InviteTokenGenerateCreated invite tokens created

swagger:response inviteTokenGenerateCreated
*/
type InviteTokenGenerateCreated struct {
}

// NewInviteTokenGenerateCreated creates InviteTokenGenerateCreated with default headers values
func NewInviteTokenGenerateCreated() *InviteTokenGenerateCreated {

	return &InviteTokenGenerateCreated{}
}

// WriteResponse to the client
func (o *InviteTokenGenerateCreated) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.Header().Del(runtime.HeaderContentType) //Remove Content-Type on empty responses

	rw.WriteHeader(201)
}

// InviteTokenGenerateBadRequestCode is the HTTP code returned for type InviteTokenGenerateBadRequest
const InviteTokenGenerateBadRequestCode int = 400

/*
InviteTokenGenerateBadRequest invite tokens not created

swagger:response inviteTokenGenerateBadRequest
*/
type InviteTokenGenerateBadRequest struct {
}

// NewInviteTokenGenerateBadRequest creates InviteTokenGenerateBadRequest with default headers values
func NewInviteTokenGenerateBadRequest() *InviteTokenGenerateBadRequest {

	return &InviteTokenGenerateBadRequest{}
}

// WriteResponse to the client
func (o *InviteTokenGenerateBadRequest) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.Header().Del(runtime.HeaderContentType) //Remove Content-Type on empty responses

	rw.WriteHeader(400)
}

// InviteTokenGenerateUnauthorizedCode is the HTTP code returned for type InviteTokenGenerateUnauthorized
const InviteTokenGenerateUnauthorizedCode int = 401

/*
InviteTokenGenerateUnauthorized unauthorized

swagger:response inviteTokenGenerateUnauthorized
*/
type InviteTokenGenerateUnauthorized struct {
}

// NewInviteTokenGenerateUnauthorized creates InviteTokenGenerateUnauthorized with default headers values
func NewInviteTokenGenerateUnauthorized() *InviteTokenGenerateUnauthorized {

	return &InviteTokenGenerateUnauthorized{}
}

// WriteResponse to the client
func (o *InviteTokenGenerateUnauthorized) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.Header().Del(runtime.HeaderContentType) //Remove Content-Type on empty responses

	rw.WriteHeader(401)
}

// InviteTokenGenerateInternalServerErrorCode is the HTTP code returned for type InviteTokenGenerateInternalServerError
const InviteTokenGenerateInternalServerErrorCode int = 500

/*
InviteTokenGenerateInternalServerError internal server error

swagger:response inviteTokenGenerateInternalServerError
*/
type InviteTokenGenerateInternalServerError struct {
}

// NewInviteTokenGenerateInternalServerError creates InviteTokenGenerateInternalServerError with default headers values
func NewInviteTokenGenerateInternalServerError() *InviteTokenGenerateInternalServerError {

	return &InviteTokenGenerateInternalServerError{}
}

// WriteResponse to the client
func (o *InviteTokenGenerateInternalServerError) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.Header().Del(runtime.HeaderContentType) //Remove Content-Type on empty responses

	rw.WriteHeader(500)
}
