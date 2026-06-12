import type { INodeProperties } from 'n8n-workflow';

export const longviewDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Longview"
					]
				}
			},
			"options": [
				{
					"name": "Get Longview Clients",
					"value": "Get Longview Clients",
					"action": "Longview Clients List",
					"description": "Returns a paginated list of Longview Clients you have access to. Longview Client is used to monitor stats on your Linode with the help of the Longview Client application.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/longview/clients"
						}
					}
				},
				{
					"name": "Create Longview Client",
					"value": "Create Longview Client",
					"action": "Longview Client Create",
					"description": "Creates a Longview Client.  This Client will not begin monitoring the status of your server until you configure the Longview Client application on your Linode using the returning `install_code` and `api_key`.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/longview/clients"
						}
					}
				},
				{
					"name": "Delete Longview Client",
					"value": "Delete Longview Client",
					"action": "Longview Client Delete",
					"description": "Deletes a Longview Client from your Account.\n\n**All information stored for this client will be lost.**\n\nThis _does not_ uninstall the Longview Client application for your Linode - you must do that manually.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/longview/clients/{{$parameter[\"clientId\"]}}"
						}
					}
				},
				{
					"name": "Get Longview Client",
					"value": "Get Longview Client",
					"action": "Longview Client View",
					"description": "Returns a single Longview Client you can access.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/longview/clients/{{$parameter[\"clientId\"]}}"
						}
					}
				},
				{
					"name": "Update Longview Client",
					"value": "Update Longview Client",
					"action": "Longview Client Update",
					"description": "Updates a Longview Client.  This cannot update how it monitors your server; use the Longview Client application on your Linode for monitoring configuration.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/longview/clients/{{$parameter[\"clientId\"]}}"
						}
					}
				},
				{
					"name": "Get Longview Plan",
					"value": "Get Longview Plan",
					"action": "Longview Plan View",
					"description": "Get the details of your current Longview plan. This returns a `LongviewSubscription` object for your current Longview Pro plan, or an empty set `{}` if your current plan is Longview Free.\n\nYou must have at least one of the following `global` [User Grants](/docs/api/account/#users-grants-view) in order to access this endpoint:\n\n  - `\"account_access\": read_write`\n  - `\"account_access\": read_only`\n  - `\"longview_subscription\": true`\n  - `\"add_longview\": true`\n\n\nTo update your subscription plan, send a request to [Update Longview Plan](/docs/api/longview/#longview-plan-update).\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/longview/plan"
						}
					}
				},
				{
					"name": "Update Longview Plan",
					"value": "Update Longview Plan",
					"action": "Longview Plan Update",
					"description": "Update your Longview plan to that of the given subcription ID. This returns a `LongviewSubscription` object for the updated Longview Pro plan, or an empty set `{}` if the updated plan is Longview Free.\n\nYou must have `\"longview_subscription\": true` configured as a `global` [User Grant](/docs/api/account/#users-grants-view) in order to access this endpoint.\n\nYou can send a request to the [List Longview Subscriptions](/docs/api/longview/#longview-subscriptions-list) endpoint to receive the details, including `id`'s, of each plan.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/longview/plan"
						}
					}
				},
				{
					"name": "Get Longview Subscriptions",
					"value": "Get Longview Subscriptions",
					"action": "Longview Subscriptions List",
					"description": "Returns a paginated list of available Longview Subscriptions. This is a public endpoint and requires no authentication.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/longview/subscriptions"
						}
					}
				},
				{
					"name": "Get Longview Subscription",
					"value": "Get Longview Subscription",
					"action": "Longview Subscription View",
					"description": "Get the Longview plan details as a single `LongviewSubscription` object for the provided subscription ID. This is a public endpoint and requires no authentication.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/longview/subscriptions/{{$parameter[\"subscriptionId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /longview/clients",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Longview"
					],
					"operation": [
						"Get Longview Clients"
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
						"Longview"
					],
					"operation": [
						"Get Longview Clients"
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
						"Longview"
					],
					"operation": [
						"Get Longview Clients"
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
						"Longview"
					],
					"operation": [
						"Get Longview Clients"
					]
				}
			}
		},
		{
			"displayName": "POST /longview/clients",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Longview"
					],
					"operation": [
						"Create Longview Client"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "api_key",
			"type": "string",
			"default": "BD1B4B54-D752-A76D-5A9BD8A17F39DB61",
			"description": "The API key for this Client, used when configuring the Longview\nClient application on your Linode.\n\nReturns as `[REDACTED]` if you do not have read-write access to this client.\n",
			"routing": {
				"send": {
					"property": "api_key",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Longview"
					],
					"operation": [
						"Create Longview Client"
					]
				}
			}
		},
		{
			"displayName": "Apps",
			"name": "apps",
			"type": "json",
			"default": "{\n  \"apache\": true,\n  \"mysql\": true,\n  \"nginx\": false\n}",
			"description": "The apps this Client is monitoring on your Linode. This is configured when you install the Longview Client application, and is present here for information purposes only.\n",
			"routing": {
				"send": {
					"property": "apps",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Longview"
					],
					"operation": [
						"Create Longview Client"
					]
				}
			}
		},
		{
			"displayName": "Created",
			"name": "created",
			"type": "string",
			"default": "2018-01-01T00:01:01",
			"description": "When this Longview Client was created.\n",
			"routing": {
				"send": {
					"property": "created",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Longview"
					],
					"operation": [
						"Create Longview Client"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "number",
			"default": 789,
			"description": "This Client's unique ID.\n",
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
						"Longview"
					],
					"operation": [
						"Create Longview Client"
					]
				}
			}
		},
		{
			"displayName": "Install Code",
			"name": "install_code",
			"type": "string",
			"default": "BD1B5605-BF5E-D385-BA07AD518BE7F321",
			"description": "The install code for this Client, used when configuring the Longview\nClient application on your Linode.\n\nReturns as `[REDACTED]` if you do not have read-write access to this client.\n",
			"routing": {
				"send": {
					"property": "install_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Longview"
					],
					"operation": [
						"Create Longview Client"
					]
				}
			}
		},
		{
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "client789",
			"description": "This Client's unique label. This is for display purposes only.\n",
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
						"Longview"
					],
					"operation": [
						"Create Longview Client"
					]
				}
			}
		},
		{
			"displayName": "Updated",
			"name": "updated",
			"type": "string",
			"default": "2018-01-01T00:01:01",
			"description": "When this Longview Client was last updated.\n",
			"routing": {
				"send": {
					"property": "updated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Longview"
					],
					"operation": [
						"Create Longview Client"
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
						"Longview"
					],
					"operation": [
						"Create Longview Client"
					]
				}
			}
		},
		{
			"displayName": "DELETE /longview/clients/{clientId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Longview"
					],
					"operation": [
						"Delete Longview Client"
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
						"Longview"
					],
					"operation": [
						"Delete Longview Client"
					]
				}
			}
		},
		{
			"displayName": "GET /longview/clients/{clientId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Longview"
					],
					"operation": [
						"Get Longview Client"
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
						"Longview"
					],
					"operation": [
						"Get Longview Client"
					]
				}
			}
		},
		{
			"displayName": "PUT /longview/clients/{clientId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Longview"
					],
					"operation": [
						"Update Longview Client"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "api_key",
			"type": "string",
			"default": "BD1B4B54-D752-A76D-5A9BD8A17F39DB61",
			"description": "The API key for this Client, used when configuring the Longview\nClient application on your Linode.\n\nReturns as `[REDACTED]` if you do not have read-write access to this client.\n",
			"routing": {
				"send": {
					"property": "api_key",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Longview"
					],
					"operation": [
						"Update Longview Client"
					]
				}
			}
		},
		{
			"displayName": "Apps",
			"name": "apps",
			"type": "json",
			"default": "{\n  \"apache\": true,\n  \"mysql\": true,\n  \"nginx\": false\n}",
			"description": "The apps this Client is monitoring on your Linode. This is configured when you install the Longview Client application, and is present here for information purposes only.\n",
			"routing": {
				"send": {
					"property": "apps",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Longview"
					],
					"operation": [
						"Update Longview Client"
					]
				}
			}
		},
		{
			"displayName": "Created",
			"name": "created",
			"type": "string",
			"default": "2018-01-01T00:01:01",
			"description": "When this Longview Client was created.\n",
			"routing": {
				"send": {
					"property": "created",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Longview"
					],
					"operation": [
						"Update Longview Client"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "number",
			"default": 789,
			"description": "This Client's unique ID.\n",
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
						"Longview"
					],
					"operation": [
						"Update Longview Client"
					]
				}
			}
		},
		{
			"displayName": "Install Code",
			"name": "install_code",
			"type": "string",
			"default": "BD1B5605-BF5E-D385-BA07AD518BE7F321",
			"description": "The install code for this Client, used when configuring the Longview\nClient application on your Linode.\n\nReturns as `[REDACTED]` if you do not have read-write access to this client.\n",
			"routing": {
				"send": {
					"property": "install_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Longview"
					],
					"operation": [
						"Update Longview Client"
					]
				}
			}
		},
		{
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "client789",
			"description": "This Client's unique label. This is for display purposes only.\n",
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
						"Longview"
					],
					"operation": [
						"Update Longview Client"
					]
				}
			}
		},
		{
			"displayName": "Updated",
			"name": "updated",
			"type": "string",
			"default": "2018-01-01T00:01:01",
			"description": "When this Longview Client was last updated.\n",
			"routing": {
				"send": {
					"property": "updated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Longview"
					],
					"operation": [
						"Update Longview Client"
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
						"Longview"
					],
					"operation": [
						"Update Longview Client"
					]
				}
			}
		},
		{
			"displayName": "GET /longview/plan",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Longview"
					],
					"operation": [
						"Get Longview Plan"
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
						"Longview"
					],
					"operation": [
						"Get Longview Plan"
					]
				}
			}
		},
		{
			"displayName": "PUT /longview/plan",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Longview"
					],
					"operation": [
						"Update Longview Plan"
					]
				}
			}
		},
		{
			"displayName": "Longview Subscription",
			"name": "longview_subscription",
			"type": "options",
			"default": "longview-10",
			"description": "The subscription ID for a particular Longview plan. A value of `null` corresponds to Longview Free.\n\nYou can send a request to the [List Longview Subscriptions](/docs/api/longview/#longview-subscriptions-list) endpoint to receive the details of each plan.\n",
			"options": [
				{
					"name": "Longview 3",
					"value": "longview-3"
				},
				{
					"name": "Longview 10",
					"value": "longview-10"
				},
				{
					"name": "Longview 40",
					"value": "longview-40"
				},
				{
					"name": "Longview 100",
					"value": "longview-100"
				}
			],
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
						"Longview"
					],
					"operation": [
						"Update Longview Plan"
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
						"Longview"
					],
					"operation": [
						"Update Longview Plan"
					]
				}
			}
		},
		{
			"displayName": "GET /longview/subscriptions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Longview"
					],
					"operation": [
						"Get Longview Subscriptions"
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
						"Longview"
					],
					"operation": [
						"Get Longview Subscriptions"
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
						"Longview"
					],
					"operation": [
						"Get Longview Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "GET /longview/subscriptions/{subscriptionId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Longview"
					],
					"operation": [
						"Get Longview Subscription"
					]
				}
			}
		},
];
