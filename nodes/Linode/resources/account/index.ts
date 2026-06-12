import type { INodeProperties } from 'n8n-workflow';

export const accountDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					]
				}
			},
			"options": [
				{
					"name": "Get Account",
					"value": "Get Account",
					"action": "Account View",
					"description": "Returns the contact and billing information related to your Account.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account"
						}
					}
				},
				{
					"name": "Update Account",
					"value": "Update Account",
					"action": "Account Update",
					"description": "Updates contact and billing information related to your Account.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/account"
						}
					}
				},
				{
					"name": "Cancel Account",
					"value": "Cancel Account",
					"action": "Account Cancel",
					"description": "Cancels an active Linode account. This action will cause Linode to attempt to charge the credit card on file for the remaining balance. An error will occur if Linode fails to charge the credit card on file. Restricted users will not be able to cancel an account.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/account/cancel"
						}
					}
				},
				{
					"name": "Get Events",
					"value": "Get Events",
					"action": "Events List",
					"description": "Returns a collection of Event objects representing actions taken on your Account from the last 90 days. The Events returned depend on your grants.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/events"
						}
					}
				},
				{
					"name": "Get Event",
					"value": "Get Event",
					"action": "Event View",
					"description": "Returns a single Event object.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/events/{{$parameter[\"eventId\"]}}"
						}
					}
				},
				{
					"name": "Event Read",
					"value": "Event Read",
					"action": "Event Mark as Read",
					"description": "Marks a single Event as read.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/account/events/{{$parameter[\"eventId\"]}}/read"
						}
					}
				},
				{
					"name": "Event Seen",
					"value": "Event Seen",
					"action": "Event Mark as Seen",
					"description": "Marks all Events up to and including this Event by ID as seen.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/account/events/{{$parameter[\"eventId\"]}}/seen"
						}
					}
				},
				{
					"name": "Get Invoices",
					"value": "Get Invoices",
					"action": "Invoices List",
					"description": "Returns a paginated list of Invoices against your Account.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/invoices"
						}
					}
				},
				{
					"name": "Get Invoice",
					"value": "Get Invoice",
					"action": "Invoice View",
					"description": "Returns a single Invoice object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/invoices/{{$parameter[\"invoiceId\"]}}"
						}
					}
				},
				{
					"name": "Get Invoice Items",
					"value": "Get Invoice Items",
					"action": "Invoice Items List",
					"description": "Returns a paginated list of Invoice items.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/invoices/{{$parameter[\"invoiceId\"]}}/items"
						}
					}
				},
				{
					"name": "Get Account Logins",
					"value": "Get Account Logins",
					"action": "User Logins List All",
					"description": "Returns a collection of successful logins for all users on the account during the last 90 days. This command can only be accessed by the unrestricted users of an account.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/logins"
						}
					}
				},
				{
					"name": "Get Account Login",
					"value": "Get Account Login",
					"action": "Login View",
					"description": "Returns a Login object that displays information about a successful login. The logins that can be viewed can be for any user on the account, and are not limited to only the logins of the user that is accessing this API endpoint. This command can only be accessed by the unrestricted users of the account.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/logins/{{$parameter[\"loginId\"]}}"
						}
					}
				},
				{
					"name": "Get Maintenance",
					"value": "Get Maintenance",
					"action": "Maintenance List",
					"description": "Returns a collection of Maintenance objects for any entity a user has permissions to view. Cancelled Maintenance objects are not returned.\n\nCurrently, Linodes are the only entities available for viewing.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/maintenance"
						}
					}
				},
				{
					"name": "Get Notifications",
					"value": "Get Notifications",
					"action": "Notifications List",
					"description": "Returns a collection of Notification objects representing important, often time-sensitive items related to your Account.\nYou cannot interact directly with Notifications, and a Notification will disappear when the circumstances causing it have been resolved. For example, if you have an important Ticket open, you must respond to the Ticket to dismiss the Notification.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/notifications"
						}
					}
				},
				{
					"name": "Get Clients",
					"value": "Get Clients",
					"action": "OAuth Clients List",
					"description": "Returns a paginated list of OAuth Clients registered to your Account.  OAuth Clients allow users to log into applications you write or host using their Linode Account, and may allow them to grant some level of access to their Linodes or other entities to your application.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/oauth-clients"
						}
					}
				},
				{
					"name": "Create Client",
					"value": "Create Client",
					"action": "OAuth Client Create",
					"description": "Creates an OAuth Client, which can be used to allow users (using their Linode account) to log in to your own application, and optionally grant your application some amount of access to their Linodes or other entities.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/account/oauth-clients"
						}
					}
				},
				{
					"name": "Delete Client",
					"value": "Delete Client",
					"action": "OAuth Client Delete",
					"description": "Deletes an OAuth Client registered with Linode. The Client ID and Client secret will no longer be accepted by <a target=\"_top\" href=\"https://login.linode.com\">https://login.linode.com</a>, and all tokens issued to this client will be invalidated (meaning that if your application was using a token, it will no longer work).\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/account/oauth-clients/{{$parameter[\"clientId\"]}}"
						}
					}
				},
				{
					"name": "Get Client",
					"value": "Get Client",
					"action": "OAuth Client View",
					"description": "Returns information about a single OAuth client.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/oauth-clients/{{$parameter[\"clientId\"]}}"
						}
					}
				},
				{
					"name": "Update Client",
					"value": "Update Client",
					"action": "OAuth Client Update",
					"description": "Update information about an OAuth Client on your Account. This can be especially useful to update the `redirect_uri` of your client in the event that the callback url changed in your application.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/account/oauth-clients/{{$parameter[\"clientId\"]}}"
						}
					}
				},
				{
					"name": "Reset Client Secret",
					"value": "Reset Client Secret",
					"action": "OAuth Client Secret Reset",
					"description": "Resets the OAuth Client secret for a client you own, and returns the OAuth Client with the plaintext secret. This secret is not supposed to be publicly known or disclosed anywhere. This can be used to generate a new secret in case the one you have has been leaked, or to get a new secret if you lost the original. The old secret is expired immediately, and logins to your client with the old secret will fail.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/account/oauth-clients/{{$parameter[\"clientId\"]}}/reset-secret"
						}
					}
				},
				{
					"name": "Get Client Thumbnail",
					"value": "Get Client Thumbnail",
					"action": "OAuth Client Thumbnail View",
					"description": "Returns the thumbnail for this OAuth Client.  This is a publicly-viewable endpoint, and can be accessed without authentication.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/oauth-clients/{{$parameter[\"clientId\"]}}/thumbnail"
						}
					}
				},
				{
					"name": "Set Client Thumbnail",
					"value": "Set Client Thumbnail",
					"action": "OAuth Client Thumbnail Update",
					"description": "Upload a thumbnail for a client you own.  You must upload an image file that will be returned when the thumbnail is retrieved.  This image will be publicly-viewable.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/account/oauth-clients/{{$parameter[\"clientId\"]}}/thumbnail"
						}
					}
				},
				{
					"name": "Get Payment Methods",
					"value": "Get Payment Methods",
					"action": "Payment Methods List",
					"description": "Returns a paginated list of Payment Methods for this Account.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/payment-methods"
						}
					}
				},
				{
					"name": "Create Payment Method",
					"value": "Create Payment Method",
					"action": "Payment Method Add",
					"description": "Adds a Payment Method to your Account with the option to set it as the default method.\n\n* Adding a default Payment Method removes the default status from any other Payment Method.\n\n* An Account can have up to 6 active Payment Methods.\n\n* Up to 60 Payment Methods can be added each day.\n\n* Prior to adding a Payment Method, ensure that your billing address information is up-to-date\nwith a valid `zip` by using the Account Update ([PUT /account](/docs/api/account/#account-update)) endpoint.\n\n* A `payment_method_add` event is generated when a payment is successfully submitted.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/account/payment-methods"
						}
					}
				},
				{
					"name": "Delete Payment Method",
					"value": "Delete Payment Method",
					"action": "Payment Method Delete",
					"description": "Deactivate the specified Payment Method.\n\nThe default Payment Method can not be deleted. To add a new default Payment Method, access the Payment Method\nAdd ([POST /account/payment-methods](/docs/api/account/#payment-method-add)) endpoint. To designate an existing\nPayment Method as the default method, access the Payment Method Make Default\n([POST /account/payment-methods/{paymentMethodId}/make-default](/docs/api/account/#payment-method-make-default))\nendpoint.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/account/payment-methods/{{$parameter[\"paymentMethodId\"]}}"
						}
					}
				},
				{
					"name": "Get Payment Method",
					"value": "Get Payment Method",
					"action": "Payment Method View",
					"description": "View the details of the specified Payment Method.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/payment-methods/{{$parameter[\"paymentMethodId\"]}}"
						}
					}
				},
				{
					"name": "Make Payment Method Default",
					"value": "Make Payment Method Default",
					"action": "Payment Method Make Default",
					"description": "Make the specified Payment Method the default method for automatically processing payments.\n\nRemoves the default status from any other Payment Method.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/account/payment-methods/{{$parameter[\"paymentMethodId\"]}}/make-default"
						}
					}
				},
				{
					"name": "Get Payments",
					"value": "Get Payments",
					"action": "Payments List",
					"description": "Returns a paginated list of Payments made on this Account.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/payments"
						}
					}
				},
				{
					"name": "Create Payment",
					"value": "Create Payment",
					"action": "Payment Make",
					"description": "Makes a Payment to your Account.\n\n* The requested amount is charged to the default Payment Method if no `payment_method_id` is specified.\n\n* A `payment_submitted` event is generated when a payment is successfully submitted.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/account/payments"
						}
					}
				},
				{
					"name": "Get Payment",
					"value": "Get Payment",
					"action": "Payment View",
					"description": "Returns information about a specific Payment.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/payments/{{$parameter[\"paymentId\"]}}"
						}
					}
				},
				{
					"name": "Create Promo Credit",
					"value": "Create Promo Credit",
					"action": "Promo Credit Add",
					"description": "Adds an expiring Promo Credit to your account.\n\nThe following restrictions apply:\n\n* Your account must be less than 90 days old.\n* There must not be an existing Promo Credit already on your account.\n* The requesting User must be unrestricted. Use the User Update\n  ([PUT /account/users/{username}](/docs/api/account/#user-update)) to change a User's restricted status.\n* The `promo_code` must be valid and unexpired.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/account/promo-codes"
						}
					}
				},
				{
					"name": "Get Service Transfers",
					"value": "Get Service Transfers",
					"action": "Service Transfers List",
					"description": "Returns a collection of all created and accepted Service Transfers for this account, regardless of the user that created or accepted the transfer.\n\nThis command can only be accessed by the unrestricted users of an account.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/service-transfers"
						}
					}
				},
				{
					"name": "Create Service Transfer",
					"value": "Create Service Transfer",
					"action": "Service Transfer Create",
					"description": "Creates a transfer request for the specified services. A request can contain any of the specified service types\nand any number of each service type. At this time, only Linodes can be transferred.\n\nWhen created successfully, a confirmation email is sent to the account that created this transfer containing a\ntransfer token and instructions on completing the transfer.\n\nWhen a transfer is [accepted](/docs/api/account/#service-transfer-accept), the requested services are moved to\nthe receiving account. Linode services will not experience interruptions due to the transfer process. Backups\nfor Linodes are transferred as well.\n\nDNS records that are associated with requested services will not be transferred or updated. Please ensure that\nassociated DNS records have been updated or communicated to the recipient prior to the transfer.\n\nA transfer can take up to three hours to complete once accepted. When a transfer is\ncompleted, billing for transferred services ends for the sending account and begins for the receiving account.\n\nThis command can only be accessed by the unrestricted users of an account.\n\nThere are several conditions that must be met in order to successfully create a transfer request:\n\n1. The account creating the transfer must not have a past due balance or active Terms of Service violation.\n\n1. The service must be owned by the account that is creating the transfer.\n\n1. The service must not be assigned to another Service Transfer that is pending or that has been accepted and is\nincomplete.\n\n1. Linodes must not:\n\n    * be assigned to a NodeBalancer, Firewall, VLAN, or Managed Service.\n\n    * have any attached Block Storage Volumes.\n\n    * have any shared IP addresses.\n\n    * have any assigned /56, /64, or /116 IPv6 ranges.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/account/service-transfers"
						}
					}
				},
				{
					"name": "Delete Service Transfer",
					"value": "Delete Service Transfer",
					"action": "Service Transfer Cancel",
					"description": "Cancels the Service Transfer for the provided token. Once cancelled, a transfer cannot be accepted or otherwise\nacted on in any way. If cancelled in error, the transfer must be\n[created](/docs/api/account/#service-transfer-create) again.\n\nWhen cancelled, an email notification for the cancellation is sent to the account that created\nthis transfer. Transfers can not be cancelled if they are expired or have been accepted.\n\nThis command can only be accessed by the unrestricted users of the account that created this transfer.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/account/service-transfers/{{$parameter[\"token\"]}}"
						}
					}
				},
				{
					"name": "Get Service Transfer",
					"value": "Get Service Transfer",
					"action": "Service Transfer View",
					"description": "Returns the details of the Service Transfer for the provided token.\n\nWhile a transfer is pending, any unrestricted user *of any account* can access this command. After a\ntransfer has been accepted, it can only be viewed by unrestricted users of the accounts that created and\naccepted the transfer. If cancelled or expired, only unrestricted users of the account that created the\ntransfer can view it.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/service-transfers/{{$parameter[\"token\"]}}"
						}
					}
				},
				{
					"name": "Accept Service Transfer",
					"value": "Accept Service Transfer",
					"action": "Service Transfer Accept",
					"description": "Accept a Service Transfer for the provided token to receive the services included in the transfer to your\naccount. At this time, only Linodes can be transferred.\n\nWhen accepted, email confirmations are sent to the accounts that created and accepted the transfer. A transfer\ncan take up to three hours to complete once accepted. Once a transfer is completed, billing for transferred\nservices ends for the sending account and begins for the receiving account.\n\nThis command can only be accessed by the unrestricted users of the account that receives the transfer. Users\nof the same account that created a transfer cannot accept the transfer.\n\nThere are several conditions that must be met in order to accept a transfer request:\n\n1. Only transfers with a `pending` status can be accepted.\n\n1. The account accepting the transfer must have a registered payment method and must not have a past due\n  balance or other account limitations for the services to be transferred.\n\n1. Both the account that created the transfer and the account that is accepting the transfer must not have any\nactive Terms of Service violations.\n\n1. The service must still be owned by the account that created the transfer.\n\n1. Linodes must not:\n\n    * be assigned to a NodeBalancer, Firewall, VLAN, or Managed Service.\n\n    * have any attached Block Storage Volumes.\n\n    * have any shared IP addresses.\n\n    * have any assigned /56, /64, or /116 IPv6 ranges.\n\nAny and all of the above conditions must be cured and maintained by the relevant account prior to the\ntransfer's expiration to allow the transfer to be accepted by the receiving account.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/account/service-transfers/{{$parameter[\"token\"]}}/accept"
						}
					}
				},
				{
					"name": "Get Account Settings",
					"value": "Get Account Settings",
					"action": "Account Settings View",
					"description": "Returns information related to your Account settings: Managed service subscription, Longview subscription, and network helper.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/settings"
						}
					}
				},
				{
					"name": "Update Account Settings",
					"value": "Update Account Settings",
					"action": "Account Settings Update",
					"description": "Updates your Account settings.\n\nTo update your Longview subscription plan, send a request to [Update Longview Plan](/docs/api/longview/#longview-plan-update).\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/account/settings"
						}
					}
				},
				{
					"name": "Enable Account Managed",
					"value": "Enable Account Managed",
					"action": "Linode Managed Enable",
					"description": "Enables Linode Managed for the entire account and sends a welcome email to the account's associated email address. Linode Managed can monitor any service or software stack reachable over TCP or HTTP. See our [Linode Managed guide](/docs/guides/linode-managed/) to learn more.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/account/settings/managed-enable"
						}
					}
				},
				{
					"name": "Get Transfer",
					"value": "Get Transfer",
					"action": "Network Utilization View",
					"description": "Returns a Transfer object showing your network utilization, in GB, for the current month.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/transfer"
						}
					}
				},
				{
					"name": "Get Users",
					"value": "Get Users",
					"action": "Users List",
					"description": "Returns a paginated list of Users on your Account.\n\nThis command can only be accessed by the unrestricted users of an account.\n\nUsers may access all or part of your Account based on their restricted status and grants.  An unrestricted User may access everything on the account, whereas restricted User may only access entities or perform actions they've been given specific grants to.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/users"
						}
					}
				},
				{
					"name": "Create User",
					"value": "Create User",
					"action": "User Create",
					"description": "Creates a User on your Account. Once created, a confirmation message containing\npassword creation and login instructions is sent to the User's email address.\n\nThis command can only be accessed by the unrestricted users of an account.\n\nThe User's account access is determined by whether or not they are restricted,\nand what grants they have been given.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/account/users"
						}
					}
				},
				{
					"name": "Delete User",
					"value": "Delete User",
					"action": "User Delete",
					"description": "Deletes a User. The deleted User will be immediately logged out and\nmay no longer log in or perform any actions. All of the User's Grants\nwill be removed.\n\nThis command can only be accessed by the unrestricted users of an account.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/account/users/{{$parameter[\"username\"]}}"
						}
					}
				},
				{
					"name": "Get User",
					"value": "Get User",
					"action": "User View",
					"description": "Returns information about a single User on your Account.\n\nThis command can only be accessed by the unrestricted users of an account.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/users/{{$parameter[\"username\"]}}"
						}
					}
				},
				{
					"name": "Update User",
					"value": "Update User",
					"action": "User Update",
					"description": "Update information about a User on your Account. This can be used to\nchange the restricted status of a User. When making a User restricted,\nno grants will be configured by default and you must then set up grants\nin order for the User to access anything on the Account.\n\nThis command can only be accessed by the unrestricted users of an account.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/account/users/{{$parameter[\"username\"]}}"
						}
					}
				},
				{
					"name": "Get User Grants",
					"value": "Get User Grants",
					"action": "User's Grants View",
					"description": "Returns the full grants structure for the specified account User\n(other than the account owner, see below for details). This includes all entities\non the Account alongside the level of access this User has to each of them.\n\nThis command can only be accessed by the unrestricted users of an account.\n\nThe current authenticated User, including the account owner, may view their\nown grants at the [/profile/grants](/docs/api/profile/#grants-list)\nendpoint, but will not see entities that they do not have access to.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/users/{{$parameter[\"username\"]}}/grants"
						}
					}
				},
				{
					"name": "Update User Grants",
					"value": "Update User Grants",
					"action": "User's Grants Update",
					"description": "Update the grants a User has. This can be used to give a User access\nto new entities or actions, or take access away.  You do not need to\ninclude the grant for every entity on the Account in this request; any\nthat are not included will remain unchanged.\n\nThis command can only be accessed by the unrestricted users of an account.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/account/users/{{$parameter[\"username\"]}}/grants"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /account",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Account"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Account"
					]
				}
			}
		},
		{
			"displayName": "PUT /account",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account"
					]
				}
			}
		},
		{
			"displayName": "Active Promotions",
			"name": "active_promotions",
			"type": "json",
			"default": "[\n  {\n    \"credit_monthly_cap\": \"10.00\",\n    \"credit_remaining\": \"50.00\",\n    \"description\": \"Receive up to $10 off your services every month for 6 months! Unused credits will expire once this promotion period ends.\",\n    \"expire_dt\": \"2018-01-31T23:59:59\",\n    \"image_url\": \"https://linode.com/10_a_month_promotion.svg\",\n    \"service_type\": \"all\",\n    \"summary\": \"$10 off your Linode a month!\",\n    \"this_month_credit_remaining\": \"10.00\"\n  }\n]",
			"routing": {
				"send": {
					"property": "active_promotions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account"
					]
				}
			}
		},
		{
			"displayName": "Active Since",
			"name": "active_since",
			"type": "string",
			"default": "2018-01-01T00:01:01",
			"description": "The datetime of when the account was activated.",
			"routing": {
				"send": {
					"property": "active_since",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account"
					]
				}
			}
		},
		{
			"displayName": "Address 1",
			"name": "address_1",
			"type": "string",
			"default": "123 Main Street",
			"description": "First line of this Account's billing address.",
			"routing": {
				"send": {
					"property": "address_1",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account"
					]
				}
			}
		},
		{
			"displayName": "Address 2",
			"name": "address_2",
			"type": "string",
			"default": "Suite A",
			"description": "Second line of this Account's billing address.",
			"routing": {
				"send": {
					"property": "address_2",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account"
					]
				}
			}
		},
		{
			"displayName": "Balance",
			"name": "balance",
			"type": "number",
			"default": 200,
			"description": "This Account's balance, in US dollars.",
			"routing": {
				"send": {
					"property": "balance",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account"
					]
				}
			}
		},
		{
			"displayName": "Balance Uninvoiced",
			"name": "balance_uninvoiced",
			"type": "number",
			"default": 145,
			"description": "This Account's current estimated invoice in US dollars. This is not your final invoice balance. Transfer charges are not included in the estimate.\n",
			"routing": {
				"send": {
					"property": "balance_uninvoiced",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account"
					]
				}
			}
		},
		{
			"displayName": "Billing Source",
			"name": "billing_source",
			"type": "options",
			"default": "akamai",
			"description": "The source of service charges for this Account, as determined by its relationship with Akamai.\nAccounts that are associated with Akamai-specific customers return a value of `akamai`.\nAll other Accounts return a value of `linode`.\n",
			"options": [
				{
					"name": "Akamai",
					"value": "akamai"
				},
				{
					"name": "Linode",
					"value": "linode"
				}
			],
			"routing": {
				"send": {
					"property": "billing_source",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account"
					]
				}
			}
		},
		{
			"displayName": "Capabilities",
			"name": "capabilities",
			"type": "json",
			"default": "[\n  \"Linodes\",\n  \"NodeBalancers\",\n  \"Block Storage\",\n  \"Object Storage\"\n]",
			"description": "A list of capabilities your account supports.\n",
			"routing": {
				"send": {
					"property": "capabilities",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account"
					]
				}
			}
		},
		{
			"displayName": "City",
			"name": "city",
			"type": "string",
			"default": "Philadelphia",
			"description": "The city for this Account's billing address.",
			"routing": {
				"send": {
					"property": "city",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account"
					]
				}
			}
		},
		{
			"displayName": "Company",
			"name": "company",
			"type": "string",
			"default": "Linode LLC",
			"description": "The company name associated with this Account.",
			"routing": {
				"send": {
					"property": "company",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account"
					]
				}
			}
		},
		{
			"displayName": "Country",
			"name": "country",
			"type": "string",
			"default": "US",
			"description": "The two-letter ISO 3166 country code of this Account's billing address.\n",
			"routing": {
				"send": {
					"property": "country",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account"
					]
				}
			}
		},
		{
			"displayName": "Credit Card",
			"name": "credit_card",
			"type": "json",
			"default": "{\n  \"expiry\": \"11/2022\",\n  \"last_four\": 1111\n}",
			"description": "Credit Card information associated with this Account.",
			"routing": {
				"send": {
					"property": "credit_card",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "john.smith@linode.com",
			"description": "The email address of the person associated with this Account.",
			"routing": {
				"send": {
					"property": "email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account"
					]
				}
			}
		},
		{
			"displayName": "Euuid",
			"name": "euuid",
			"type": "string",
			"default": "E1AF5EEC-526F-487D-B317EBEB34C87D71",
			"description": "An external unique identifier for this account.\n",
			"routing": {
				"send": {
					"property": "euuid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account"
					]
				}
			}
		},
		{
			"displayName": "First Name",
			"name": "first_name",
			"type": "string",
			"default": "John",
			"description": "The first name of the person associated with this Account.",
			"routing": {
				"send": {
					"property": "first_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account"
					]
				}
			}
		},
		{
			"displayName": "Last Name",
			"name": "last_name",
			"type": "string",
			"default": "Smith",
			"description": "The last name of the person associated with this Account.",
			"routing": {
				"send": {
					"property": "last_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account"
					]
				}
			}
		},
		{
			"displayName": "Phone",
			"name": "phone",
			"type": "string",
			"default": "215-555-1212",
			"description": "The phone number associated with this Account.",
			"routing": {
				"send": {
					"property": "phone",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account"
					]
				}
			}
		},
		{
			"displayName": "State",
			"name": "state",
			"type": "string",
			"default": "PA",
			"description": "If billing address is in the United States (US) or Canada (CA), only the two-letter ISO 3166 State or Province code are accepted. If entering a US military address, state abbreviations (AA, AE, AP) should be entered. If the address is outside the US or CA, this is the Province associated with the Account's billing address.\n",
			"routing": {
				"send": {
					"property": "state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account"
					]
				}
			}
		},
		{
			"displayName": "Tax ID",
			"name": "tax_id",
			"type": "string",
			"default": "ATU99999999",
			"description": "The tax identification number associated with this Account, for tax calculations in some countries. If you do not live in a country that collects tax, this should be an empty string (`\"\"`).\n",
			"routing": {
				"send": {
					"property": "tax_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account"
					]
				}
			}
		},
		{
			"displayName": "Zip",
			"name": "zip",
			"type": "string",
			"default": "19102-1234",
			"description": "The zip code of this Account's billing address. The following restrictions apply:\n\n- May only consist of letters, numbers, spaces, and hyphens.\n- Must not contain more than 9 letter or number characters.\n",
			"routing": {
				"send": {
					"property": "zip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account"
					]
				}
			}
		},
		{
			"displayName": "POST /account/cancel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Cancel Account"
					]
				}
			}
		},
		{
			"displayName": "Comments",
			"name": "comments",
			"type": "string",
			"default": "I'm consolidating multiple accounts into one.",
			"description": "Any reason for cancelling the account, and any other comments you might have about your Linode service.\n",
			"routing": {
				"send": {
					"property": "comments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Cancel Account"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Cancel Account"
					]
				}
			}
		},
		{
			"displayName": "GET /account/events",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Events"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "The page of a collection to return.",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Events"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "page_size",
			"description": "The number of items to return per page.",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page_size",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Events"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Events"
					]
				}
			}
		},
		{
			"displayName": "GET /account/events/{eventId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Event"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Event"
					]
				}
			}
		},
		{
			"displayName": "POST /account/events/{eventId}/read",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Event Read"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Event Read"
					]
				}
			}
		},
		{
			"displayName": "POST /account/events/{eventId}/seen",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Event Seen"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Event Seen"
					]
				}
			}
		},
		{
			"displayName": "GET /account/invoices",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Invoices"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "The page of a collection to return.",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Invoices"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "page_size",
			"description": "The number of items to return per page.",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page_size",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Invoices"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Invoices"
					]
				}
			}
		},
		{
			"displayName": "GET /account/invoices/{invoiceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Invoice"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Invoice"
					]
				}
			}
		},
		{
			"displayName": "GET /account/invoices/{invoiceId}/items",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Invoice Items"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "The page of a collection to return.",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Invoice Items"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "page_size",
			"description": "The number of items to return per page.",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page_size",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Invoice Items"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Invoice Items"
					]
				}
			}
		},
		{
			"displayName": "GET /account/logins",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Account Logins"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Account Logins"
					]
				}
			}
		},
		{
			"displayName": "GET /account/logins/{loginId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Account Login"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Account Login"
					]
				}
			}
		},
		{
			"displayName": "GET /account/maintenance",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Maintenance"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Maintenance"
					]
				}
			}
		},
		{
			"displayName": "GET /account/notifications",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Notifications"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Notifications"
					]
				}
			}
		},
		{
			"displayName": "GET /account/oauth-clients",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Clients"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "The page of a collection to return.",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Clients"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "page_size",
			"description": "The number of items to return per page.",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page_size",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Clients"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Clients"
					]
				}
			}
		},
		{
			"displayName": "POST /account/oauth-clients",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Client"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "2737bf16b39ab5d7b4a1",
			"description": "The OAuth Client ID.  This is used to identify the client, and is a publicly-known value (it is not a secret).\n",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Client"
					]
				}
			}
		},
		{
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "Test_Client_1",
			"description": "The name of this application.  This will be presented to users when they are asked to grant it access to their Account.\n",
			"routing": {
				"send": {
					"property": "label",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Client"
					]
				}
			}
		},
		{
			"displayName": "Public",
			"name": "public",
			"type": "boolean",
			"default": false,
			"description": "If this is a public or private OAuth Client.  Public clients have a slightly different authentication workflow than private clients.  See the <a target=\"_top\" href=\"https://oauth.net/2/\">OAuth spec</a> for more details.\n",
			"routing": {
				"send": {
					"property": "public",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Client"
					]
				}
			}
		},
		{
			"displayName": "Redirect Uri",
			"name": "redirect_uri",
			"type": "string",
			"default": "https://example.org/oauth/callback",
			"description": "The location a successful log in from <a target=\"_top\" href=\"https://login.linode.com\">https://login.linode.com</a> should be redirected to for this client.  The receiver of this redirect should be ready to accept an OAuth exchange code and finish the OAuth exchange.\n",
			"routing": {
				"send": {
					"property": "redirect_uri",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Client"
					]
				}
			}
		},
		{
			"displayName": "Secret",
			"name": "secret",
			"type": "string",
			"default": "<REDACTED>",
			"description": "The OAuth Client secret, used in the OAuth exchange.  This is returned as `<REDACTED>` except when an OAuth Client is created or its secret is reset.  This is a secret, and should not be shared or disclosed publicly.\n",
			"routing": {
				"send": {
					"property": "secret",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Client"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "active",
			"description": "The status of this application.  `active` by default.\n",
			"options": [
				{
					"name": "Active",
					"value": "active"
				},
				{
					"name": "Disabled",
					"value": "disabled"
				},
				{
					"name": "Suspended",
					"value": "suspended"
				}
			],
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Client"
					]
				}
			}
		},
		{
			"displayName": "Thumbnail URL",
			"name": "thumbnail_url",
			"type": "string",
			"default": "https://api.linode.com/v4/account/clients/2737bf16b39ab5d7b4a1/thumbnail",
			"description": "The URL where this client's thumbnail may be viewed, or `null` if this client does not have a thumbnail set.\n",
			"routing": {
				"send": {
					"property": "thumbnail_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Client"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Client"
					]
				}
			}
		},
		{
			"displayName": "DELETE /account/oauth-clients/{clientId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Delete Client"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Delete Client"
					]
				}
			}
		},
		{
			"displayName": "GET /account/oauth-clients/{clientId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Client"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Client"
					]
				}
			}
		},
		{
			"displayName": "PUT /account/oauth-clients/{clientId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Client"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "2737bf16b39ab5d7b4a1",
			"description": "The OAuth Client ID.  This is used to identify the client, and is a publicly-known value (it is not a secret).\n",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Client"
					]
				}
			}
		},
		{
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "Test_Client_1",
			"description": "The name of this application.  This will be presented to users when they are asked to grant it access to their Account.\n",
			"routing": {
				"send": {
					"property": "label",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Client"
					]
				}
			}
		},
		{
			"displayName": "Public",
			"name": "public",
			"type": "boolean",
			"default": false,
			"description": "If this is a public or private OAuth Client.  Public clients have a slightly different authentication workflow than private clients.  See the <a target=\"_top\" href=\"https://oauth.net/2/\">OAuth spec</a> for more details.\n",
			"routing": {
				"send": {
					"property": "public",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Client"
					]
				}
			}
		},
		{
			"displayName": "Redirect Uri",
			"name": "redirect_uri",
			"type": "string",
			"default": "https://example.org/oauth/callback",
			"description": "The location a successful log in from <a target=\"_top\" href=\"https://login.linode.com\">https://login.linode.com</a> should be redirected to for this client.  The receiver of this redirect should be ready to accept an OAuth exchange code and finish the OAuth exchange.\n",
			"routing": {
				"send": {
					"property": "redirect_uri",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Client"
					]
				}
			}
		},
		{
			"displayName": "Secret",
			"name": "secret",
			"type": "string",
			"default": "<REDACTED>",
			"description": "The OAuth Client secret, used in the OAuth exchange.  This is returned as `<REDACTED>` except when an OAuth Client is created or its secret is reset.  This is a secret, and should not be shared or disclosed publicly.\n",
			"routing": {
				"send": {
					"property": "secret",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Client"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "active",
			"description": "The status of this application.  `active` by default.\n",
			"options": [
				{
					"name": "Active",
					"value": "active"
				},
				{
					"name": "Disabled",
					"value": "disabled"
				},
				{
					"name": "Suspended",
					"value": "suspended"
				}
			],
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Client"
					]
				}
			}
		},
		{
			"displayName": "Thumbnail URL",
			"name": "thumbnail_url",
			"type": "string",
			"default": "https://api.linode.com/v4/account/clients/2737bf16b39ab5d7b4a1/thumbnail",
			"description": "The URL where this client's thumbnail may be viewed, or `null` if this client does not have a thumbnail set.\n",
			"routing": {
				"send": {
					"property": "thumbnail_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Client"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Client"
					]
				}
			}
		},
		{
			"displayName": "POST /account/oauth-clients/{clientId}/reset-secret",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Reset Client Secret"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Reset Client Secret"
					]
				}
			}
		},
		{
			"displayName": "GET /account/oauth-clients/{clientId}/thumbnail",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Client Thumbnail"
					]
				}
			}
		},
		{
			"displayName": "PUT /account/oauth-clients/{clientId}/thumbnail",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Set Client Thumbnail"
					]
				}
			}
		},
		{
			"displayName": "PUT /account/oauth-clients/{clientId}/thumbnail<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Set Client Thumbnail"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Set Client Thumbnail"
					]
				}
			}
		},
		{
			"displayName": "GET /account/payment-methods",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Payment Methods"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "The page of a collection to return.",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Payment Methods"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "page_size",
			"description": "The number of items to return per page.",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page_size",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Payment Methods"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Payment Methods"
					]
				}
			}
		},
		{
			"displayName": "POST /account/payment-methods",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Payment Method"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Data",
			"name": "data",
			"type": "json",
			"default": "{\n  \"card_number\": 4111111111111111,\n  \"cvv\": \"123\",\n  \"expiry_month\": 12,\n  \"expiry_year\": 2020\n}",
			"description": "An object representing the credit card information you have on file with\nLinode to make Payments against your Account.\n",
			"routing": {
				"send": {
					"property": "data",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Payment Method"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Is Default",
			"name": "is_default",
			"type": "boolean",
			"default": true,
			"description": "Whether this Payment Method is the default method for automatically processing service charges.\n",
			"routing": {
				"send": {
					"property": "is_default",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Payment Method"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "credit_card",
			"description": "The type of Payment Method.\n\nAlternative Payment Methods including Google Pay and PayPal can be added using the Cloud Manager. See the [Manage Payment Methods](/docs/products/platform/billing/guides/payment-methods/) guide\nfor details and instructions.\n",
			"options": [
				{
					"name": "Credit Card",
					"value": "credit_card"
				}
			],
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Payment Method"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Payment Method"
					]
				}
			}
		},
		{
			"displayName": "DELETE /account/payment-methods/{paymentMethodId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Delete Payment Method"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Delete Payment Method"
					]
				}
			}
		},
		{
			"displayName": "GET /account/payment-methods/{paymentMethodId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Payment Method"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Payment Method"
					]
				}
			}
		},
		{
			"displayName": "POST /account/payment-methods/{paymentMethodId}/make-default",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Make Payment Method Default"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Make Payment Method Default"
					]
				}
			}
		},
		{
			"displayName": "GET /account/payments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Payments"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "The page of a collection to return.",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Payments"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "page_size",
			"description": "The number of items to return per page.",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page_size",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Payments"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Payments"
					]
				}
			}
		},
		{
			"displayName": "POST /account/payments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Payment"
					]
				}
			}
		},
		{
			"displayName": "Cvv",
			"name": "cvv",
			"type": "string",
			"default": "123",
			"description": "CVV (Card Verification Value) of the credit card to be used for the Payment. Required if paying by credit card.\n",
			"routing": {
				"send": {
					"property": "cvv",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Payment"
					]
				}
			}
		},
		{
			"displayName": "Payment Method ID",
			"name": "payment_method_id",
			"type": "number",
			"default": 123,
			"description": "The ID of the Payment Method to apply to the Payment.\n",
			"routing": {
				"send": {
					"property": "payment_method_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Payment"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Usd",
			"name": "usd",
			"type": "string",
			"default": "$120.50",
			"description": "The amount in US Dollars of the Payment.\n\n* Can begin with or without `$`.\n* Commas (`,`) are not accepted.\n* Must end with a decimal expression, such as `.00` or `.99`.\n* Minimum: `$5.00` or the Account balance, whichever is lower.\n* Maximum: `$2000.00` or the Account balance up to `$50000.00`, whichever is greater.\n",
			"routing": {
				"send": {
					"property": "usd",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Payment"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Payment"
					]
				}
			}
		},
		{
			"displayName": "GET /account/payments/{paymentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Payment"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Payment"
					]
				}
			}
		},
		{
			"displayName": "POST /account/promo-codes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Promo Credit"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Promo Code",
			"name": "promo_code",
			"type": "string",
			"default": "",
			"description": "The Promo Code.\n",
			"routing": {
				"send": {
					"property": "promo_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Promo Credit"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Promo Credit"
					]
				}
			}
		},
		{
			"displayName": "GET /account/service-transfers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Service Transfers"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "The page of a collection to return.",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Service Transfers"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "page_size",
			"description": "The number of items to return per page.",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page_size",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Service Transfers"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Service Transfers"
					]
				}
			}
		},
		{
			"displayName": "POST /account/service-transfers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Service Transfer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Entities",
			"name": "entities",
			"type": "json",
			"default": "{\n  \"linodes\": [\n    111,\n    222\n  ]\n}",
			"description": "A collection of the services to include in this transfer request, separated by type.\n",
			"routing": {
				"send": {
					"property": "entities",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Service Transfer"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create Service Transfer"
					]
				}
			}
		},
		{
			"displayName": "DELETE /account/service-transfers/{token}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Delete Service Transfer"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Delete Service Transfer"
					]
				}
			}
		},
		{
			"displayName": "GET /account/service-transfers/{token}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Service Transfer"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Service Transfer"
					]
				}
			}
		},
		{
			"displayName": "POST /account/service-transfers/{token}/accept",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Accept Service Transfer"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Accept Service Transfer"
					]
				}
			}
		},
		{
			"displayName": "GET /account/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Account Settings"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Account Settings"
					]
				}
			}
		},
		{
			"displayName": "PUT /account/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account Settings"
					]
				}
			}
		},
		{
			"displayName": "Backups Enabled",
			"name": "backups_enabled",
			"type": "boolean",
			"default": true,
			"description": "Account-wide backups default.  If `true`, all Linodes created will automatically be enrolled in the Backups service.  If `false`, Linodes will not be enrolled by default, but may still be enrolled on creation or later.\n",
			"routing": {
				"send": {
					"property": "backups_enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account Settings"
					]
				}
			}
		},
		{
			"displayName": "Longview Subscription",
			"name": "longview_subscription",
			"type": "string",
			"default": "longview-3",
			"description": "The Longview Pro tier you are currently subscribed to. The value must be a [Longview Subscription](/docs/api/longview/#longview-subscriptions-list) ID or `null` for Longview Free.\n",
			"routing": {
				"send": {
					"property": "longview_subscription",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account Settings"
					]
				}
			}
		},
		{
			"displayName": "Managed",
			"name": "managed",
			"type": "boolean",
			"default": true,
			"description": "Our 24/7 incident response service. This robust, multi-homed monitoring system distributes monitoring checks to ensure that your servers remain online and available at all times. Linode Managed can monitor any service or software stack reachable over TCP or HTTP. Once you add a service to Linode Managed, we'll monitor it for connectivity, response, and total request time.\n",
			"routing": {
				"send": {
					"property": "managed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account Settings"
					]
				}
			}
		},
		{
			"displayName": "Network Helper",
			"name": "network_helper",
			"type": "boolean",
			"default": false,
			"description": "Enables network helper across all users by default for new Linodes and Linode Configs.\n",
			"routing": {
				"send": {
					"property": "network_helper",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account Settings"
					]
				}
			}
		},
		{
			"displayName": "Object Storage",
			"name": "object_storage",
			"type": "options",
			"default": "active",
			"description": "A string describing the status of this account's Object Storage service enrollment.\n",
			"options": [
				{
					"name": "Disabled",
					"value": "disabled"
				},
				{
					"name": "Suspended",
					"value": "suspended"
				},
				{
					"name": "Active",
					"value": "active"
				}
			],
			"routing": {
				"send": {
					"property": "object_storage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account Settings"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account Settings"
					]
				}
			}
		},
		{
			"displayName": "POST /account/settings/managed-enable",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Enable Account Managed"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Enable Account Managed"
					]
				}
			}
		},
		{
			"displayName": "GET /account/transfer",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Transfer"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Transfer"
					]
				}
			}
		},
		{
			"displayName": "GET /account/users",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Users"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "The page of a collection to return.",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Users"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "page_size",
			"description": "The number of items to return per page.",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page_size",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Users"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Users"
					]
				}
			}
		},
		{
			"displayName": "POST /account/users",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create User"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "example_user@linode.com",
			"description": "The email address for the User. Linode sends emails to this address for account management communications. May be used for other communications as configured.\n",
			"routing": {
				"send": {
					"property": "email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create User"
					]
				}
			}
		},
		{
			"displayName": "Restricted",
			"name": "restricted",
			"type": "boolean",
			"default": true,
			"description": "If true, the User must be granted access to perform actions or access entities on this Account. See User Grants View ([GET /account/users/{username}/grants](/docs/api/account/#users-grants-view)) for details on how to configure grants for a restricted User.\n",
			"routing": {
				"send": {
					"property": "restricted",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create User"
					]
				}
			}
		},
		{
			"displayName": "SSH Keys",
			"name": "ssh_keys",
			"type": "json",
			"default": "[\n  \"home-pc\",\n  \"laptop\"\n]",
			"description": "A list of SSH Key labels added by this User.\n\nUsers can add keys with the SSH Key Add ([POST /profile/sshkeys](/docs/api/profile/#ssh-key-add)) command.\n\nThese keys are deployed when this User is included in the `authorized_users`\nfield of the following requests:\n- Linode Create ([POST /linode/instances](/docs/api/linode-instances/#linode-create))\n- Linode Rebuild ([POST /linode/instances/{linodeId}/rebuild](/docs/api/linode-instances/#linode-rebuild))\n- Disk Create ([POST /linode/instances/{linodeId}/disks](/docs/api/linode-instances/#disk-create))\n",
			"routing": {
				"send": {
					"property": "ssh_keys",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create User"
					]
				}
			}
		},
		{
			"displayName": "Tfa Enabled",
			"name": "tfa_enabled",
			"type": "boolean",
			"default": true,
			"description": "A boolean value indicating if the User has Two Factor Authentication (TFA) enabled. See the Create Two Factor Secret ([POST /profile/tfa-enable](/docs/api/profile/#two-factor-secret-create)) endpoint to enable TFA.\n",
			"routing": {
				"send": {
					"property": "tfa_enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create User"
					]
				}
			}
		},
		{
			"displayName": "Username",
			"name": "username",
			"type": "string",
			"default": "example_user",
			"description": "The User's username. This is used for logging in, and may also be displayed alongside actions the User performs (for example, in Events or public StackScripts).\n",
			"routing": {
				"send": {
					"property": "username",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create User"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Create User"
					]
				}
			}
		},
		{
			"displayName": "DELETE /account/users/{username}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Delete User"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Delete User"
					]
				}
			}
		},
		{
			"displayName": "GET /account/users/{username}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get User"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get User"
					]
				}
			}
		},
		{
			"displayName": "PUT /account/users/{username}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update User"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "example_user@linode.com",
			"description": "The email address for the User. Linode sends emails to this address for account management communications. May be used for other communications as configured.\n",
			"routing": {
				"send": {
					"property": "email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update User"
					]
				}
			}
		},
		{
			"displayName": "Restricted",
			"name": "restricted",
			"type": "boolean",
			"default": true,
			"description": "If true, the User must be granted access to perform actions or access entities on this Account. See User Grants View ([GET /account/users/{username}/grants](/docs/api/account/#users-grants-view)) for details on how to configure grants for a restricted User.\n",
			"routing": {
				"send": {
					"property": "restricted",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update User"
					]
				}
			}
		},
		{
			"displayName": "SSH Keys",
			"name": "ssh_keys",
			"type": "json",
			"default": "[\n  \"home-pc\",\n  \"laptop\"\n]",
			"description": "A list of SSH Key labels added by this User.\n\nUsers can add keys with the SSH Key Add ([POST /profile/sshkeys](/docs/api/profile/#ssh-key-add)) command.\n\nThese keys are deployed when this User is included in the `authorized_users`\nfield of the following requests:\n- Linode Create ([POST /linode/instances](/docs/api/linode-instances/#linode-create))\n- Linode Rebuild ([POST /linode/instances/{linodeId}/rebuild](/docs/api/linode-instances/#linode-rebuild))\n- Disk Create ([POST /linode/instances/{linodeId}/disks](/docs/api/linode-instances/#disk-create))\n",
			"routing": {
				"send": {
					"property": "ssh_keys",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update User"
					]
				}
			}
		},
		{
			"displayName": "Tfa Enabled",
			"name": "tfa_enabled",
			"type": "boolean",
			"default": true,
			"description": "A boolean value indicating if the User has Two Factor Authentication (TFA) enabled. See the Create Two Factor Secret ([POST /profile/tfa-enable](/docs/api/profile/#two-factor-secret-create)) endpoint to enable TFA.\n",
			"routing": {
				"send": {
					"property": "tfa_enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update User"
					]
				}
			}
		},
		{
			"displayName": "Username",
			"name": "username",
			"type": "string",
			"default": "example_user",
			"description": "The User's username. This is used for logging in, and may also be displayed alongside actions the User performs (for example, in Events or public StackScripts).\n",
			"routing": {
				"send": {
					"property": "username",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update User"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update User"
					]
				}
			}
		},
		{
			"displayName": "GET /account/users/{username}/grants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get User Grants"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get User Grants"
					]
				}
			}
		},
		{
			"displayName": "PUT /account/users/{username}/grants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update User Grants"
					]
				}
			}
		},
		{
			"displayName": "Database",
			"name": "database",
			"type": "json",
			"default": "[\n  {\n    \"id\": 123,\n    \"label\": \"example-entity\",\n    \"permissions\": \"read_only\"\n  }\n]",
			"description": "The grants this User has for each Database that is owned by this Account.\n",
			"routing": {
				"send": {
					"property": "database",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update User Grants"
					]
				}
			}
		},
		{
			"displayName": "Domain",
			"name": "domain",
			"type": "json",
			"default": "[\n  {\n    \"id\": 123,\n    \"label\": \"example-entity\",\n    \"permissions\": \"read_only\"\n  }\n]",
			"description": "The grants this User has for each Domain that is owned by this Account.\n",
			"routing": {
				"send": {
					"property": "domain",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update User Grants"
					]
				}
			}
		},
		{
			"displayName": "Global",
			"name": "global",
			"type": "json",
			"default": "{\n  \"account_access\": \"read_only\",\n  \"add_databases\": true,\n  \"add_domains\": true,\n  \"add_firewalls\": true,\n  \"add_images\": true,\n  \"add_linodes\": true,\n  \"add_longview\": true,\n  \"add_nodebalancers\": true,\n  \"add_stackscripts\": true,\n  \"add_volumes\": true,\n  \"cancel_account\": false,\n  \"longview_subscription\": true\n}",
			"description": "A structure containing the Account-level grants a User has.\n",
			"routing": {
				"send": {
					"property": "global",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update User Grants"
					]
				}
			}
		},
		{
			"displayName": "Image",
			"name": "image",
			"type": "json",
			"default": "[\n  {\n    \"id\": 123,\n    \"label\": \"example-entity\",\n    \"permissions\": \"read_only\"\n  }\n]",
			"description": "The grants this User has for each Image that is owned by this Account.\n",
			"routing": {
				"send": {
					"property": "image",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update User Grants"
					]
				}
			}
		},
		{
			"displayName": "Linode",
			"name": "linode",
			"type": "json",
			"default": "[\n  {\n    \"id\": 123,\n    \"label\": \"example-entity\",\n    \"permissions\": \"read_only\"\n  }\n]",
			"description": "The grants this User has for each Linode that is owned by this Account.\n",
			"routing": {
				"send": {
					"property": "linode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update User Grants"
					]
				}
			}
		},
		{
			"displayName": "Longview",
			"name": "longview",
			"type": "json",
			"default": "[\n  {\n    \"id\": 123,\n    \"label\": \"example-entity\",\n    \"permissions\": \"read_only\"\n  }\n]",
			"description": "The grants this User has for each Longview Client that is owned by this Account.\n",
			"routing": {
				"send": {
					"property": "longview",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update User Grants"
					]
				}
			}
		},
		{
			"displayName": "Nodebalancer",
			"name": "nodebalancer",
			"type": "json",
			"default": "[\n  {\n    \"id\": 123,\n    \"label\": \"example-entity\",\n    \"permissions\": \"read_only\"\n  }\n]",
			"description": "The grants this User has for each NodeBalancer that is owned by this Account.\n",
			"routing": {
				"send": {
					"property": "nodebalancer",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update User Grants"
					]
				}
			}
		},
		{
			"displayName": "Stackscript",
			"name": "stackscript",
			"type": "json",
			"default": "[\n  {\n    \"id\": 123,\n    \"label\": \"example-entity\",\n    \"permissions\": \"read_only\"\n  }\n]",
			"description": "The grants this User has for each StackScript that is owned by this Account.\n",
			"routing": {
				"send": {
					"property": "stackscript",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update User Grants"
					]
				}
			}
		},
		{
			"displayName": "Volume",
			"name": "volume",
			"type": "json",
			"default": "[\n  {\n    \"id\": 123,\n    \"label\": \"example-entity\",\n    \"permissions\": \"read_only\"\n  }\n]",
			"description": "The grants this User has for each Block Storage Volume that is owned by this Account.\n",
			"routing": {
				"send": {
					"property": "volume",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update User Grants"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update User Grants"
					]
				}
			}
		},
];
