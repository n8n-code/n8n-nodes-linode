import type { INodeProperties } from 'n8n-workflow';

export const tagsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Tags"
					]
				}
			},
			"options": [
				{
					"name": "Get Tags",
					"value": "Get Tags",
					"action": "Tags List",
					"description": "Tags are User-defined labels attached to objects in your Account, such as Linodes. They are used for specifying and grouping attributes of objects that are relevant to the User.\n\nThis endpoint returns a paginated list of Tags on your account.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tags"
						}
					}
				},
				{
					"name": "Create Tag",
					"value": "Create Tag",
					"action": "New Tag Create",
					"description": "Creates a new Tag and optionally tags requested objects with it immediately.\n\n**Important**: You must be an unrestricted User in order to add or modify Tags.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tags"
						}
					}
				},
				{
					"name": "Delete Tag",
					"value": "Delete Tag",
					"action": "Tag Delete",
					"description": "Remove a Tag from all objects and delete it.\n\n**Important**: You must be an unrestricted User in order to add or modify Tags.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/tags/{{$parameter[\"label\"]}}"
						}
					}
				},
				{
					"name": "Get Tagged Objects",
					"value": "Get Tagged Objects",
					"action": "Tagged Objects List",
					"description": "Returns a paginated list of all objects you've tagged with the requested Tag. This is a mixed collection of all object types.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tags/{{$parameter[\"label\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /tags",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tags"
					],
					"operation": [
						"Get Tags"
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
						"Tags"
					],
					"operation": [
						"Get Tags"
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
						"Tags"
					],
					"operation": [
						"Get Tags"
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
						"Tags"
					],
					"operation": [
						"Get Tags"
					]
				}
			}
		},
		{
			"displayName": "POST /tags",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tags"
					],
					"operation": [
						"Create Tag"
					]
				}
			}
		},
		{
			"displayName": "Domains",
			"name": "domains",
			"type": "json",
			"default": "[\n  564,\n  565\n]",
			"description": "A list of Domain IDs to apply the new Tag to.  You must be allowed to `read_write` all of the requested Domains, or the Tag will not be created and an error will be returned.\n",
			"routing": {
				"send": {
					"property": "domains",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tags"
					],
					"operation": [
						"Create Tag"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "example tag",
			"description": "The new Tag.\n",
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
						"Tags"
					],
					"operation": [
						"Create Tag"
					]
				}
			}
		},
		{
			"displayName": "Linodes",
			"name": "linodes",
			"type": "json",
			"default": "[\n  123,\n  456\n]",
			"description": "A list of Linode IDs to apply the new Tag to.  You must be allowed to `read_write` all of the requested Linodes, or the Tag will not be created and an error will be returned.\n",
			"routing": {
				"send": {
					"property": "linodes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tags"
					],
					"operation": [
						"Create Tag"
					]
				}
			}
		},
		{
			"displayName": "Nodebalancers",
			"name": "nodebalancers",
			"type": "json",
			"default": "[\n  10301,\n  10501\n]",
			"description": "A list of NodeBalancer IDs to apply the new Tag to. You must be allowed to `read_write` all of the requested NodeBalancers, or the Tag will not be created and an error will be returned.\n",
			"routing": {
				"send": {
					"property": "nodebalancers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tags"
					],
					"operation": [
						"Create Tag"
					]
				}
			}
		},
		{
			"displayName": "Volumes",
			"name": "volumes",
			"type": "json",
			"default": "[\n  9082,\n  10003\n]",
			"description": "A list of Volume IDs to apply the new Tag to.  You must be allowed to `read_write` all of the requested Volumes, or the Tag will not be created and an error will be returned.\n",
			"routing": {
				"send": {
					"property": "volumes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tags"
					],
					"operation": [
						"Create Tag"
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
						"Tags"
					],
					"operation": [
						"Create Tag"
					]
				}
			}
		},
		{
			"displayName": "DELETE /tags/{label}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tags"
					],
					"operation": [
						"Delete Tag"
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
						"Tags"
					],
					"operation": [
						"Delete Tag"
					]
				}
			}
		},
		{
			"displayName": "GET /tags/{label}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tags"
					],
					"operation": [
						"Get Tagged Objects"
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
						"Tags"
					],
					"operation": [
						"Get Tagged Objects"
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
						"Tags"
					],
					"operation": [
						"Get Tagged Objects"
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
						"Tags"
					],
					"operation": [
						"Get Tagged Objects"
					]
				}
			}
		},
];
