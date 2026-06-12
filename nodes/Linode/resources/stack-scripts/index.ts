import type { INodeProperties } from 'n8n-workflow';

export const stackScriptsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Stack Scripts"
					]
				}
			},
			"options": [
				{
					"name": "Get Stack Scripts",
					"value": "Get Stack Scripts",
					"action": "StackScripts List",
					"description": "If the request is not authenticated, only public StackScripts are returned.\n\nFor more information on StackScripts, please read our [StackScripts documentation](/docs/products/tools/stackscripts/).\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/linode/stackscripts"
						}
					}
				},
				{
					"name": "Add Stack Script",
					"value": "Add Stack Script",
					"action": "StackScript Create",
					"description": "Creates a StackScript in your Account.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/linode/stackscripts"
						}
					}
				},
				{
					"name": "Delete Stack Script",
					"value": "Delete Stack Script",
					"action": "StackScript Delete",
					"description": "Deletes a private StackScript you have permission to `read_write`. You cannot delete a public StackScript.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/linode/stackscripts/{{$parameter[\"stackscriptId\"]}}"
						}
					}
				},
				{
					"name": "Get Stack Script",
					"value": "Get Stack Script",
					"action": "StackScript View",
					"description": "Returns all of the information about a specified StackScript, including the contents of the script.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/linode/stackscripts/{{$parameter[\"stackscriptId\"]}}"
						}
					}
				},
				{
					"name": "Update Stack Script",
					"value": "Update Stack Script",
					"action": "StackScript Update",
					"description": "Updates a StackScript.\n\n**Once a StackScript is made public, it cannot be made private.**\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/linode/stackscripts/{{$parameter[\"stackscriptId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /linode/stackscripts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stack Scripts"
					],
					"operation": [
						"Get Stack Scripts"
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
						"Stack Scripts"
					],
					"operation": [
						"Get Stack Scripts"
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
						"Stack Scripts"
					],
					"operation": [
						"Get Stack Scripts"
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
						"Stack Scripts"
					],
					"operation": [
						"Get Stack Scripts"
					]
				}
			}
		},
		{
			"displayName": "POST /linode/stackscripts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stack Scripts"
					],
					"operation": [
						"Add Stack Script"
					]
				}
			}
		},
		{
			"displayName": "Created",
			"name": "created",
			"type": "string",
			"default": "2018-01-01T00:01:01",
			"description": "The date this StackScript was created.\n",
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
						"Stack Scripts"
					],
					"operation": [
						"Add Stack Script"
					]
				}
			}
		},
		{
			"displayName": "Deployments Active",
			"name": "deployments_active",
			"type": "number",
			"default": 1,
			"description": "Count of currently active, deployed Linodes created from this StackScript.\n",
			"routing": {
				"send": {
					"property": "deployments_active",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stack Scripts"
					],
					"operation": [
						"Add Stack Script"
					]
				}
			}
		},
		{
			"displayName": "Deployments Total",
			"name": "deployments_total",
			"type": "number",
			"default": 12,
			"description": "The total number of times this StackScript has been deployed.\n",
			"routing": {
				"send": {
					"property": "deployments_total",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stack Scripts"
					],
					"operation": [
						"Add Stack Script"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "This StackScript installs and configures MySQL\n",
			"description": "A description for the StackScript.\n",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stack Scripts"
					],
					"operation": [
						"Add Stack Script"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "number",
			"default": 10079,
			"description": "The unique ID of this StackScript.",
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
						"Stack Scripts"
					],
					"operation": [
						"Add Stack Script"
					]
				}
			}
		},
		{
			"displayName": "Images",
			"name": "images",
			"type": "json",
			"default": "[\n  \"linode/debian9\",\n  \"linode/debian8\"\n]",
			"description": "An array of Image IDs. These are the Images that can be deployed with this StackScript.\n\n`any/all` indicates that all available Images, including private Images, are accepted.\n",
			"routing": {
				"send": {
					"property": "images",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stack Scripts"
					],
					"operation": [
						"Add Stack Script"
					]
				}
			}
		},
		{
			"displayName": "Is Public",
			"name": "is_public",
			"type": "boolean",
			"default": true,
			"description": "This determines whether other users can use your StackScript. **Once a StackScript is made public, it cannot be made private.**\n",
			"routing": {
				"send": {
					"property": "is_public",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stack Scripts"
					],
					"operation": [
						"Add Stack Script"
					]
				}
			}
		},
		{
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "a-stackscript",
			"description": "The StackScript's label is for display purposes only.\n",
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
						"Stack Scripts"
					],
					"operation": [
						"Add Stack Script"
					]
				}
			}
		},
		{
			"displayName": "Mine",
			"name": "mine",
			"type": "boolean",
			"default": true,
			"description": "Returns `true` if this StackScript is owned by the account of the user making the request, and the user\nmaking the request is unrestricted or has access to this StackScript.\n",
			"routing": {
				"send": {
					"property": "mine",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stack Scripts"
					],
					"operation": [
						"Add Stack Script"
					]
				}
			}
		},
		{
			"displayName": "Rev Note",
			"name": "rev_note",
			"type": "string",
			"default": "Set up MySQL",
			"description": "This field allows you to add notes for the set of revisions made to this StackScript.\n",
			"routing": {
				"send": {
					"property": "rev_note",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stack Scripts"
					],
					"operation": [
						"Add Stack Script"
					]
				}
			}
		},
		{
			"displayName": "Script",
			"name": "script",
			"type": "string",
			"default": "\"#!/bin/bash\"\n",
			"description": "The script to execute when provisioning a new Linode with this StackScript.\n",
			"routing": {
				"send": {
					"property": "script",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stack Scripts"
					],
					"operation": [
						"Add Stack Script"
					]
				}
			}
		},
		{
			"displayName": "Updated",
			"name": "updated",
			"type": "string",
			"default": "2018-01-01T00:01:01",
			"description": "The date this StackScript was last updated.\n",
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
						"Stack Scripts"
					],
					"operation": [
						"Add Stack Script"
					]
				}
			}
		},
		{
			"displayName": "User Defined Fields",
			"name": "user_defined_fields",
			"type": "json",
			"default": "{\n  \"example\": \"hunter2\",\n  \"label\": \"Enter the DB password\",\n  \"name\": \"DB_PASSWORD\"\n}",
			"description": "This is a list of fields defined with a special syntax inside this StackScript that allow for supplying customized parameters during deployment. See [Declare User-Defined Fields (UDFs)](/docs/products/tools/stackscripts/guides/write-a-custom-script/#declare-user-defined-fields-udfs) for more information.\n",
			"routing": {
				"send": {
					"property": "user_defined_fields",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stack Scripts"
					],
					"operation": [
						"Add Stack Script"
					]
				}
			}
		},
		{
			"displayName": "User Gravatar ID",
			"name": "user_gravatar_id",
			"type": "string",
			"default": "a445b305abda30ebc766bc7fda037c37",
			"description": "The Gravatar ID for the User who created the StackScript.\n",
			"routing": {
				"send": {
					"property": "user_gravatar_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stack Scripts"
					],
					"operation": [
						"Add Stack Script"
					]
				}
			}
		},
		{
			"displayName": "Username",
			"name": "username",
			"type": "string",
			"default": "myuser",
			"description": "The User who created the StackScript.\n",
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
						"Stack Scripts"
					],
					"operation": [
						"Add Stack Script"
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
						"Stack Scripts"
					],
					"operation": [
						"Add Stack Script"
					]
				}
			}
		},
		{
			"displayName": "DELETE /linode/stackscripts/{stackscriptId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stack Scripts"
					],
					"operation": [
						"Delete Stack Script"
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
						"Stack Scripts"
					],
					"operation": [
						"Delete Stack Script"
					]
				}
			}
		},
		{
			"displayName": "GET /linode/stackscripts/{stackscriptId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stack Scripts"
					],
					"operation": [
						"Get Stack Script"
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
						"Stack Scripts"
					],
					"operation": [
						"Get Stack Script"
					]
				}
			}
		},
		{
			"displayName": "PUT /linode/stackscripts/{stackscriptId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stack Scripts"
					],
					"operation": [
						"Update Stack Script"
					]
				}
			}
		},
		{
			"displayName": "Created",
			"name": "created",
			"type": "string",
			"default": "2018-01-01T00:01:01",
			"description": "The date this StackScript was created.\n",
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
						"Stack Scripts"
					],
					"operation": [
						"Update Stack Script"
					]
				}
			}
		},
		{
			"displayName": "Deployments Active",
			"name": "deployments_active",
			"type": "number",
			"default": 1,
			"description": "Count of currently active, deployed Linodes created from this StackScript.\n",
			"routing": {
				"send": {
					"property": "deployments_active",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stack Scripts"
					],
					"operation": [
						"Update Stack Script"
					]
				}
			}
		},
		{
			"displayName": "Deployments Total",
			"name": "deployments_total",
			"type": "number",
			"default": 12,
			"description": "The total number of times this StackScript has been deployed.\n",
			"routing": {
				"send": {
					"property": "deployments_total",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stack Scripts"
					],
					"operation": [
						"Update Stack Script"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "This StackScript installs and configures MySQL\n",
			"description": "A description for the StackScript.\n",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stack Scripts"
					],
					"operation": [
						"Update Stack Script"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "number",
			"default": 10079,
			"description": "The unique ID of this StackScript.",
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
						"Stack Scripts"
					],
					"operation": [
						"Update Stack Script"
					]
				}
			}
		},
		{
			"displayName": "Images",
			"name": "images",
			"type": "json",
			"default": "[\n  \"linode/debian9\",\n  \"linode/debian8\"\n]",
			"description": "An array of Image IDs. These are the Images that can be deployed with this StackScript.\n\n`any/all` indicates that all available Images, including private Images, are accepted.\n",
			"routing": {
				"send": {
					"property": "images",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stack Scripts"
					],
					"operation": [
						"Update Stack Script"
					]
				}
			}
		},
		{
			"displayName": "Is Public",
			"name": "is_public",
			"type": "boolean",
			"default": true,
			"description": "This determines whether other users can use your StackScript. **Once a StackScript is made public, it cannot be made private.**\n",
			"routing": {
				"send": {
					"property": "is_public",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stack Scripts"
					],
					"operation": [
						"Update Stack Script"
					]
				}
			}
		},
		{
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "a-stackscript",
			"description": "The StackScript's label is for display purposes only.\n",
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
						"Stack Scripts"
					],
					"operation": [
						"Update Stack Script"
					]
				}
			}
		},
		{
			"displayName": "Mine",
			"name": "mine",
			"type": "boolean",
			"default": true,
			"description": "Returns `true` if this StackScript is owned by the account of the user making the request, and the user\nmaking the request is unrestricted or has access to this StackScript.\n",
			"routing": {
				"send": {
					"property": "mine",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stack Scripts"
					],
					"operation": [
						"Update Stack Script"
					]
				}
			}
		},
		{
			"displayName": "Rev Note",
			"name": "rev_note",
			"type": "string",
			"default": "Set up MySQL",
			"description": "This field allows you to add notes for the set of revisions made to this StackScript.\n",
			"routing": {
				"send": {
					"property": "rev_note",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stack Scripts"
					],
					"operation": [
						"Update Stack Script"
					]
				}
			}
		},
		{
			"displayName": "Script",
			"name": "script",
			"type": "string",
			"default": "\"#!/bin/bash\"\n",
			"description": "The script to execute when provisioning a new Linode with this StackScript.\n",
			"routing": {
				"send": {
					"property": "script",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stack Scripts"
					],
					"operation": [
						"Update Stack Script"
					]
				}
			}
		},
		{
			"displayName": "Updated",
			"name": "updated",
			"type": "string",
			"default": "2018-01-01T00:01:01",
			"description": "The date this StackScript was last updated.\n",
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
						"Stack Scripts"
					],
					"operation": [
						"Update Stack Script"
					]
				}
			}
		},
		{
			"displayName": "User Defined Fields",
			"name": "user_defined_fields",
			"type": "json",
			"default": "{\n  \"example\": \"hunter2\",\n  \"label\": \"Enter the DB password\",\n  \"name\": \"DB_PASSWORD\"\n}",
			"description": "This is a list of fields defined with a special syntax inside this StackScript that allow for supplying customized parameters during deployment. See [Declare User-Defined Fields (UDFs)](/docs/products/tools/stackscripts/guides/write-a-custom-script/#declare-user-defined-fields-udfs) for more information.\n",
			"routing": {
				"send": {
					"property": "user_defined_fields",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stack Scripts"
					],
					"operation": [
						"Update Stack Script"
					]
				}
			}
		},
		{
			"displayName": "User Gravatar ID",
			"name": "user_gravatar_id",
			"type": "string",
			"default": "a445b305abda30ebc766bc7fda037c37",
			"description": "The Gravatar ID for the User who created the StackScript.\n",
			"routing": {
				"send": {
					"property": "user_gravatar_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Stack Scripts"
					],
					"operation": [
						"Update Stack Script"
					]
				}
			}
		},
		{
			"displayName": "Username",
			"name": "username",
			"type": "string",
			"default": "myuser",
			"description": "The User who created the StackScript.\n",
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
						"Stack Scripts"
					],
					"operation": [
						"Update Stack Script"
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
						"Stack Scripts"
					],
					"operation": [
						"Update Stack Script"
					]
				}
			}
		},
];
