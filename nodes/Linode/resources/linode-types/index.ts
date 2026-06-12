import type { INodeProperties } from 'n8n-workflow';

export const linodeTypesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Types"
					]
				}
			},
			"options": [
				{
					"name": "Get Linode Types",
					"value": "Get Linode Types",
					"action": "Types List",
					"description": "Returns collection of Linode Types, including pricing and specifications for each Type. These are used when [creating](/docs/api/linode-instances/#linode-create) or [resizing](/docs/api/linode-instances/#linode-resize) Linodes.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/linode/types"
						}
					}
				},
				{
					"name": "Get Linode Type",
					"value": "Get Linode Type",
					"action": "Type View",
					"description": "Returns information about a specific Linode Type, including pricing and specifications. This is used when [creating](/docs/api/linode-instances/#linode-create) or [resizing](/docs/api/linode-instances/#linode-resize) Linodes.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/linode/types/{{$parameter[\"typeId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /linode/types",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Types"
					],
					"operation": [
						"Get Linode Types"
					]
				}
			}
		},
		{
			"displayName": "GET /linode/types/{typeId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Types"
					],
					"operation": [
						"Get Linode Type"
					]
				}
			}
		},
];
