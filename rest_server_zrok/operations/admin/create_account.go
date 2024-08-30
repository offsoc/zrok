// Code generated by go-swagger; DO NOT EDIT.

package admin

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the generate command

import (
	"context"
	"net/http"

	"github.com/go-openapi/runtime/middleware"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"

	"github.com/openziti/zrok/rest_model_zrok"
)

// CreateAccountHandlerFunc turns a function with the right signature into a create account handler
type CreateAccountHandlerFunc func(CreateAccountParams, *rest_model_zrok.Principal) middleware.Responder

// Handle executing the request and returning a response
func (fn CreateAccountHandlerFunc) Handle(params CreateAccountParams, principal *rest_model_zrok.Principal) middleware.Responder {
	return fn(params, principal)
}

// CreateAccountHandler interface for that can handle valid create account params
type CreateAccountHandler interface {
	Handle(CreateAccountParams, *rest_model_zrok.Principal) middleware.Responder
}

// NewCreateAccount creates a new http.Handler for the create account operation
func NewCreateAccount(ctx *middleware.Context, handler CreateAccountHandler) *CreateAccount {
	return &CreateAccount{Context: ctx, Handler: handler}
}

/*
	CreateAccount swagger:route POST /account admin createAccount

CreateAccount create account API
*/
type CreateAccount struct {
	Context *middleware.Context
	Handler CreateAccountHandler
}

func (o *CreateAccount) ServeHTTP(rw http.ResponseWriter, r *http.Request) {
	route, rCtx, _ := o.Context.RouteInfo(r)
	if rCtx != nil {
		*r = *rCtx
	}
	var Params = NewCreateAccountParams()
	uprinc, aCtx, err := o.Context.Authorize(r, route)
	if err != nil {
		o.Context.Respond(rw, r, route.Produces, route, err)
		return
	}
	if aCtx != nil {
		*r = *aCtx
	}
	var principal *rest_model_zrok.Principal
	if uprinc != nil {
		principal = uprinc.(*rest_model_zrok.Principal) // this is really a rest_model_zrok.Principal, I promise
	}

	if err := o.Context.BindValidRequest(r, route, &Params); err != nil { // bind params
		o.Context.Respond(rw, r, route.Produces, route, err)
		return
	}

	res := o.Handler.Handle(Params, principal) // actually handle the request
	o.Context.Respond(rw, r, route.Produces, route, res)

}

// CreateAccountBody create account body
//
// swagger:model CreateAccountBody
type CreateAccountBody struct {

	// email
	Email string `json:"email,omitempty"`

	// password
	Password string `json:"password,omitempty"`
}

// Validate validates this create account body
func (o *CreateAccountBody) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this create account body based on context it is used
func (o *CreateAccountBody) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (o *CreateAccountBody) MarshalBinary() ([]byte, error) {
	if o == nil {
		return nil, nil
	}
	return swag.WriteJSON(o)
}

// UnmarshalBinary interface implementation
func (o *CreateAccountBody) UnmarshalBinary(b []byte) error {
	var res CreateAccountBody
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*o = res
	return nil
}

// CreateAccountCreatedBody create account created body
//
// swagger:model CreateAccountCreatedBody
type CreateAccountCreatedBody struct {

	// token
	Token string `json:"token,omitempty"`
}

// Validate validates this create account created body
func (o *CreateAccountCreatedBody) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this create account created body based on context it is used
func (o *CreateAccountCreatedBody) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (o *CreateAccountCreatedBody) MarshalBinary() ([]byte, error) {
	if o == nil {
		return nil, nil
	}
	return swag.WriteJSON(o)
}

// UnmarshalBinary interface implementation
func (o *CreateAccountCreatedBody) UnmarshalBinary(b []byte) error {
	var res CreateAccountCreatedBody
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*o = res
	return nil
}